#!/usr/bin/env node
/*
 * 简体中文 (zh) 검사 — Node 기본 모듈만 사용 (설치 필요 없음)
 *
 *   node localpick/tests/zh-check.cjs
 *
 * 확인하는 것
 *   1. 문법: data.js, i18n-zh.js 가 오류 없이 실행되는지
 *   2. 보존: zh 를 지우면 원래 LP_DATA 와 완전히 같은지 (en/ja/ko/id/좌표 등 그대로)
 *   3. 누락(데이터): en 이 있는 모든 다국어 객체에 zh 가 있고, 모양(문자열/배열 길이)이 en 과 같은지
 *   4. 누락(UI): LP_ZH_UI 가 index.html 의 T.en + REVIEW_COPY.en 과 키·모양이 같은지
 *   5. 중국어 확인: 한자가 들어 있는지, 일본어 가나·번체자가 섞이지 않았는지
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const ROOT = path.join(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const problems = [];
const fail = (msg) => problems.push(msg);

/* ── 1. syntax + run ── */
const ctx = { window: {} };
vm.createContext(ctx);
let before;
try {
  vm.runInContext(read('data.js'), ctx, { filename: 'data.js' });
  before = JSON.parse(JSON.stringify(ctx.window.LP_DATA));
} catch (e) { fail('data.js failed to run: ' + e.message); }
try {
  new vm.Script(read('i18n-zh.js'), { filename: 'i18n-zh.js' });
  vm.runInContext(read('i18n-zh.js'), ctx, { filename: 'i18n-zh.js' });
} catch (e) { fail('i18n-zh.js failed to run: ' + e.message); }
const after = ctx.window.LP_DATA;
const UI = ctx.window.LP_ZH_UI;
const MISSING = ctx.window.LP_ZH_MISSING || [];

/* ── 2. preservation ── */
function stripZh(v) {
  if (Array.isArray(v)) return v.map(stripZh);
  if (v && typeof v === 'object') {
    const o = {};
    for (const k of Object.keys(v)) if (k !== 'zh') o[k] = stripZh(v[k]);
    return o;
  }
  return v;
}
if (before && after) {
  try { assert.deepStrictEqual(stripZh(JSON.parse(JSON.stringify(after))), before); }
  catch (e) { fail('existing values changed (en/ja/ko/id/etc. must be preserved)'); }
}

/* ── 3. data coverage ── */
const zhStrings = [];   // [path, text]
let multi = 0;
function sameShape(en, zh, p) {
  if (typeof en === 'string') {
    if (typeof zh !== 'string' || !zh.trim()) return fail(p + ': zh must be a non-empty string');
    zhStrings.push([p, zh]);
  } else if (Array.isArray(en)) {
    if (!Array.isArray(zh) || zh.length !== en.length) return fail(p + ': zh must be an array of length ' + en.length);
    zh.forEach((x, i) => sameShape(en[i], x, p + '[' + i + ']'));
  } else {
    fail(p + ': unexpected en type');
  }
}
(function walk(v, p) {
  if (Array.isArray(v)) return v.forEach((x, i) => walk(x, p + '[' + i + ']'));
  if (v && typeof v === 'object') {
    if ('en' in v) {
      multi++;
      if (!('zh' in v)) fail(p + ': missing zh');
      else sameShape(v.en, v.zh, p + '.zh');
    } else if ('zh' in v) {
      fail(p + ': zh added to an object without en');
    }
    for (const k of Object.keys(v)) if (k !== 'zh') walk(v[k], p + '.' + k);
  }
})(after || {}, 'LP_DATA');
if (MISSING.length) fail('LP_ZH_MISSING: ' + MISSING.join(', '));

/* ── 4. UI coverage against index.html ── */
const html = read('index.html');
function grab(startRe, endMarker) {
  const m = html.match(startRe);
  if (!m) return null;
  const start = m.index;
  const end = html.indexOf(endMarker, start);
  return end < 0 ? null : html.slice(start, end + endMarker.length);
}
const tSrc = grab(/var T = \{/, '\n  };');
const rSrc = grab(/var REVIEW_COPY = \{/, '\n};');
let EN = null;
if (!tSrc) fail('index.html: could not find var T');
else {
  const uctx = {};
  vm.createContext(uctx);
  vm.runInContext(tSrc + '\n' + (rSrc || 'var REVIEW_COPY = {};') + '\nthis.EN = Object.assign({}, T.en, REVIEW_COPY.en || {});', uctx);
  EN = uctx.EN;
}
function uiShape(en, zh, p) {
  if (typeof en === 'function') {
    if (typeof zh !== 'function') return fail(p + ': must be a function');
    for (const n of [1, 3]) {
      const out = zh(n);
      if (typeof out !== 'string' || out.indexOf(String(n)) < 0) fail(p + '(' + n + '): must return a string with the number');
      else zhStrings.push([p + '(' + n + ')', out]);
    }
  } else if (typeof en === 'string') {
    if (typeof zh !== 'string' || !zh.trim()) return fail(p + ': must be a non-empty string');
    zhStrings.push([p, zh]);
  } else if (Array.isArray(en)) {
    if (!Array.isArray(zh) || zh.length !== en.length) return fail(p + ': array length ' + en.length + ' expected');
    en.forEach((x, i) => uiShape(x, zh[i], p + '[' + i + ']'));
  } else if (en && typeof en === 'object') {
    if (!zh || typeof zh !== 'object') return fail(p + ': must be an object');
    for (const k of Object.keys(en)) {
      if (!(k in zh)) { fail(p + '.' + k + ': missing'); continue; }
      if (k === 'url') { if (zh.url !== en.url) fail(p + '.url must equal en url'); continue; }
      uiShape(en[k], zh[k], p + '.' + k);
    }
    for (const k of Object.keys(zh)) if (!(k in en)) fail(p + '.' + k + ': extra key not in T.en/REVIEW_COPY.en');
  }
}
if (!UI) fail('window.LP_ZH_UI missing');
else if (EN) uiShape(EN, UI, 'LP_ZH_UI');

/* ── 5. is it Simplified Chinese? ── */
const HAN = /[一-鿿]/;
const KANA = /[぀-ヿ]/;
// 간체 문장에 나오면 안 되는 번체 전용 글자 (간체형: 们这个说会开门时间点热号乐区览费价请厅饭面鸡猪鱼虾盐酱烧汤兴与为来对发体机关车场边过还进单续选择图页译读写园药韩国见观)
const TRAD = /[們這個說會開門時間點熱號樂區覽費價請廳飯麵雞豬魚蝦鹽醬燒湯興與為來對發體機關車場邊過還進單續選擇圖頁譯讀寫園藥韓國見觀]/;
// 한자가 없어도 되는 항목: 한국어 라벨(의도), 브랜드 이름
const NO_HAN_OK = new Set(['LP_ZH_UI.menuPromoK', 'LP_ZH_UI.apps[1].name', 'LP_ZH_UI.apps[2].name', 'LP_ZH_UI.apps[3].name']);
const OLIVE = /^LP_DATA\.shopping\.groups\[0\]\.name\.zh$/;
for (const [p, s] of zhStrings) {
  if (!HAN.test(s) && !NO_HAN_OK.has(p) && !OLIVE.test(p)) fail(p + ': no Chinese characters: ' + s);
  if (KANA.test(s)) fail(p + ': contains Japanese kana: ' + s);
  if (TRAD.test(s)) fail(p + ': contains Traditional-only characters: ' + s);
}

/* ── report ── */
const summary = {
  multilingualObjects: multi,
  zhStringsChecked: zhStrings.length,
  uiKeys: UI ? Object.keys(UI).length : 0,
  enUiKeys: EN ? Object.keys(EN).length : 0,
  problems: problems.length
};
console.log(JSON.stringify(summary));
if (problems.length) {
  console.error(problems.slice(0, 50).join('\n'));
  process.exit(1);
}
console.log('zh-check: OK');
