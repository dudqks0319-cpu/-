import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
const root=process.argv[2] || 'localpick';
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const data=fs.readFileSync(path.join(root,'data.js'),'utf8');
const ctx={window:{}}; vm.createContext(ctx); vm.runInContext(data,ctx);
const D=ctx.window.LP_DATA;
let checks=0;
function check(name, fn){ fn(); checks++; console.log('PASS '+name); }
check('script syntax',()=>{for(const m of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);});
check('49 unique places, valid city/category references',()=>{assert.equal(D.places.length,49);assert.equal(new Set(D.places.map(p=>p.id)).size,49);for(const p of D.places){assert(D.cities.some(c=>c.id===p.city));assert(D.categories.some(c=>c.id===p.cat));assert(p.ko);for(const l of ['en','ja'])assert(p.name[l]);for(const l of ['en','ja','ko'])assert(p.why[l]);if(p.lat!==undefined){assert(p.lat>=33&&p.lat<=39);assert(p.lng>=124&&p.lng<=132);}}});
check('51 unique translated dishes and 12 requests',()=>{const ds=D.menu.groups.flatMap(g=>g.items);assert.equal(ds.length,51);assert.equal(new Set(ds.map(d=>d.ko)).size,51);assert.equal(D.menu.requests.length,12);for(const d of ds){for(const l of ['en','ja']){assert(d.name[l]);assert(d.desc[l]);}assert(d.desc.ko);}for(const r of D.menu.requests){for(const l of ['en','ja','ko'])assert(r[l]);}});
check('24 shopping items',()=>assert.equal(D.shopping.groups.flatMap(g=>g.items).length,24));
check('local script/style assets exist',()=>{for(const m of html.matchAll(/(?:src|href)="([^"#]+\.(?:js|css))"/g)){if(!m[1].startsWith('http'))assert(fs.existsSync(path.join(root,m[1])),m[1]);}});
check('sample data is disclosed and unmeasured popularity is not rendered',()=>{assert(html.includes('id="data-notice"'));const meter=html.slice(html.indexOf('  function meter(p) {'),html.indexOf('  /* 이름:'));assert(!meter.includes('p.locals'));assert(meter.includes('samplePlace'));});
check('no secret-shaped literals in authored source',()=>assert(!/(?:sk-[A-Za-z0-9]{30,}|ghp_[A-Za-z0-9]{30,}|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY)/.test(html+data)));
console.log(JSON.stringify({checks,places:D.places.length,dishes:51,shopping:24}));
