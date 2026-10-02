/*
 * 메뉴판 사진 스캔(OCR) 검증 스크립트
 *
 * 실행 방법 (localpick 폴더에서):
 *   1) python3 -m http.server 8765
 *   2) 다른 창에서: node tests/ocr-check.js
 *      (Playwright 필요: npm i -D playwright, 또는 PLAYWRIGHT_PATH / CHROMIUM_PATH 환경변수로 지정)
 *
 * 확인하는 것: 사진 업로드 없음(네트워크), 인식 결과/미등록 메뉴, 빈 사진, 큰 사진(6000x8000),
 * 사진 아닌 파일/깨진 파일/40MB 초과, 선택 취소, 읽는 중 취소, 연속 선택, 로딩 실패 후 재시도, 60초 타임아웃.
 */
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const fs = require('fs'), os = require('os'), path = require('path');
const FIX = path.join(__dirname, 'fixtures');
const SP = fs.mkdtempSync(path.join(os.tmpdir(), 'lp-ocr-'));
const U = (process.env.BASE_URL || 'http://localhost:8765/') + '#menu';
const R = {};
(async () => {
  const b = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  // fixtures: render the two test menus into JPEG "photos"
  const m = await b.newPage({ viewport: { width: 1000, height: 1200 } });
  await m.goto('file://' + FIX + '/menu1.html');
  await m.screenshot({ path: SP + '/menu-photo.jpg', type: 'jpeg', quality: 70 });
  await m.goto('file://' + FIX + '/menu2.html');
  await m.screenshot({ path: SP + '/menu2.jpg', type: 'jpeg', quality: 70 });
  // large 6000x8000 photo: draw the first menu photo scaled up onto a big canvas
  const big = await m.evaluate(async (src) => {
    const img = new Image(); img.src = src; await img.decode();
    const c = document.createElement('canvas'); c.width = 6000; c.height = 8000;
    const g = c.getContext('2d'); g.fillStyle = '#777'; g.fillRect(0, 0, 6000, 8000);
    g.drawImage(img, 300, 600, 5400, 5940);
    return c.toDataURL('image/jpeg', 0.85);
  }, 'data:image/jpeg;base64,' + fs.readFileSync(SP + '/menu-photo.jpg').toString('base64'));
  fs.writeFileSync(SP + '/big.jpg', Buffer.from(big.split(',')[1], 'base64'));
  // blank photo
  const blank = await m.evaluate(() => { const c = document.createElement('canvas'); c.width = 800; c.height = 600; const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0,0,800,600); return c.toDataURL('image/jpeg'); });
  fs.writeFileSync(SP + '/blank.jpg', Buffer.from(blank.split(',')[1], 'base64'));
  R.bigPhotoBytes = fs.statSync(SP + '/big.jpg').size;

  async function fresh(opts) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, locale: 'en-US', ...opts });
    const p = await ctx.newPage();
    p._errs = []; p._reqs = [];
    p.on('pageerror', e => p._errs.push(String(e)));
    p.on('request', r => p._reqs.push({ m: r.method(), u: r.url(), post: (r.postData() || '').length }));
    await p.goto(U); await p.waitForTimeout(400);
    return p;
  }
  const doneRe = /Found on this menu|No dishes|could not be read|not a photo|too large|could not load/;
  const waitDone = (p, t = 120000) => p.waitForFunction(re => new RegExp(re).test(document.getElementById('scan-body').textContent), doneRe.source, { timeout: t });
  const foundList = p => p.$$eval('#scan-body .dish', x => x.map(d => d.querySelector('.dish-ko').firstChild.textContent + ' => ' + d.querySelector('h3').textContent + (d.querySelector('.dish-said') ? ' [' + d.querySelector('.dish-said').textContent + ']' : '')));
  const bodyText = p => p.$eval('#scan-body', el => el.textContent.replace(/\s+/g, ' ').trim());

  // 1. network: no upload while scanning
  let p = await fresh();
  const before = p._reqs.length;
  await p.setInputFiles('#scan-pick', SP + '/menu-photo.jpg'); await waitDone(p);
  const scanReqs = p._reqs.slice(before);
  R.network = {
    requests: scanReqs.map(r => r.m + ' ' + r.u.replace('http://localhost:8765', '')),
    nonLocal: scanReqs.filter(r => !/^(http:\/\/localhost:8765|blob:|data:)/.test(r.u)).map(r => r.u),
    postsOrBodies: scanReqs.filter(r => r.m !== 'GET' || r.post > 0).length
  };
  R.basic = await foundList(p);

  // 2. wrong / unregistered dishes
  await p.setInputFiles('#scan-pick', SP + '/menu2.jpg'); await waitDone(p);
  R.unregistered = { found: await foundList(p), other: await p.$eval('#scan-body', el => (el.querySelector('.other-text') || {}).textContent || '') };

  // 3. blank photo
  await p.setInputFiles('#scan-pick', SP + '/blank.jpg'); await waitDone(p);
  R.blank = await bodyText(p);

  // 4. large photo
  let t0 = Date.now();
  await p.setInputFiles('#scan-pick', SP + '/big.jpg'); await waitDone(p);
  R.large = { ms: Date.now() - t0, found: (await foundList(p)).length };

  // 5. not an image / corrupt image / too big / picker cancelled
  await p.setInputFiles('#scan-pick', { name: 'menu.txt', mimeType: 'text/plain', buffer: Buffer.from('돼지국밥') }); await waitDone(p, 5000);
  R.textFile = await bodyText(p);
  await p.setInputFiles('#scan-pick', { name: 'broken.jpg', mimeType: 'image/jpeg', buffer: Buffer.from('not really a jpeg') }); await waitDone(p, 5000);
  R.corruptImage = await bodyText(p);
  await p.setInputFiles('#scan-pick', { name: 'huge.jpg', mimeType: 'image/jpeg', buffer: Buffer.alloc(41 * 1024 * 1024) }); await waitDone(p, 5000);
  R.tooBig = await bodyText(p);
  const beforeCancel = await bodyText(p);
  await p.setInputFiles('#scan-pick', []); await p.waitForTimeout(300);
  R.pickerCancelledUnchanged = (await bodyText(p)) === beforeCancel;

  // 6. cancel while reading, then rescan works
  await p.setInputFiles('#scan-pick', SP + '/big.jpg');
  await p.waitForSelector('[data-scan-cancel]', { timeout: 10000 });
  await p.click('[data-scan-cancel]');
  await p.waitForTimeout(6000);
  R.afterCancel = { body: await bodyText(p), dishes: (await foundList(p)).length };
  await p.setInputFiles('#scan-pick', SP + '/menu-photo.jpg'); await waitDone(p);
  R.rescanAfterCancel = (await foundList(p)).length;

  // 7. second photo chosen while first still running -> only second result
  await p.setInputFiles('#scan-pick', SP + '/big.jpg'); await p.waitForTimeout(300);
  await p.setInputFiles('#scan-pick', SP + '/menu2.jpg'); await waitDone(p);
  await p.waitForTimeout(4000);
  R.raceOnlyLatest = await foundList(p);
  R.errorsMain = p._errs;

  // 8. reader files fail to load (offline) -> message, then retry succeeds
  let q = await fresh();
  await q.route('**/vendor/ocr/lang/**', r => r.abort());
  await q.setInputFiles('#scan-pick', SP + '/menu-photo.jpg'); await waitDone(q, 90000);
  R.loadFail = await bodyText(q);
  await q.unroute('**/vendor/ocr/lang/**');
  await q.setInputFiles('#scan-pick', SP + '/menu-photo.jpg'); await waitDone(q);
  R.retryAfterLoadFail = (await foundList(q)).length;
  R.errorsQ = q._errs;

  // 9. reader download hangs -> timeout message after 60s
  let h = await fresh();
  await h.route('**/vendor/ocr/lang/**', () => {});   // never answers
  t0 = Date.now();
  await h.setInputFiles('#scan-pick', SP + '/menu-photo.jpg'); await waitDone(h, 90000);
  R.hang = { ms: Date.now() - t0, body: await bodyText(h) };

  // 10. Japanese + Korean labels for partial match
  let j = await fresh({ locale: 'ja-JP' });
  await j.setInputFiles('#scan-pick', SP + '/menu2.jpg'); await waitDone(j, 120000).catch(() => {});
  R.jaPartial = (await j.$$eval('#scan-body .dish-said', x => x.map(e => e.textContent))).slice(0, 2);

  console.log(JSON.stringify(R, null, 1));
  await b.close();
})().catch(e => { console.log('FAILED', e); console.log(JSON.stringify(R, null, 1)); process.exit(1); });
