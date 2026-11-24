const {chromium}=require('playwright');
const S=[
 {h:'We’re not sorry.',l:[['Still not for everything.']],cover:1},
 {h:'We’re not sorry',l:[['for the ',0],['muddy boots.',1]],s:'Clean shoes never had stories.'},
 {h:'We’re not sorry',l:[['for the ',0],['sore legs.',1]],s:'The view at the top paid for them.'},
 {h:'We’re not sorry',l:[['for the ',0],['smoke in your hair',1]],s:'It smelled like the best night.'},
 {h:'We’re not sorry',l:[['for the ',0],['silence',1],['.',0]],s:'You were allowed to hear yourself think.'},
 {h:'We’re not sorry',l:[['for the ',0],['cold nights',1],['.',0]],s:'That’s why the fire felt so good.'},
 {h:'Wild Wishes',end:1}];
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350}});
for(let i=0;i<7;i++){const d=S[i];
let body;
if(d.end) body=`<div class=h style="top:760px">Wild Wishes</div><div class=h style="top:910px;font-size:90px">Back on 25.11</div><div class=m style="top:1030px;color:#e1a541">Stay close.</div>`;
else body=`<div class=h style="top:${d.cover?780:800}px;font-size:${d.cover?130:125}px">${d.h}</div><div class=m style="top:${d.cover?950:960}px">${d.l.map(([t,g])=>g?`<span style="color:#f0b74f">${t}</span>`:t).join('')}</div>`+(d.s?`<div class=s style="top:1035px">${d.s}</div>`:'');
const html=`<style>@font-face{font-family:P;src:url(pf.woff2)}@font-face{font-family:M;src:url(mm.woff2);font-weight:500}@font-face{font-family:M;src:url(mr.woff2);font-weight:400}
body{margin:0;width:1080px;height:1350px;position:relative;background:url(../h${i+1}.jpg);color:#fff;overflow:hidden}
div{position:absolute;left:60px;width:960px;text-align:center;line-height:1;white-space:nowrap}
.h{font-family:P;font-size:125px}.m{font-family:M;font-weight:500;font-size:48px}.s{font-family:M;font-size:32px;opacity:.8}
.lg{left:410px;top:70px;width:260px}.hd{left:55px;top:1272px;width:auto;font:400 22px M;opacity:.7}</style>
<img class=lg style="position:absolute" src=logo.png><div class=hd style="text-align:left">@wildwishesjo</div>${body}`;
require('fs').writeFileSync('final/p.html',html);
await p.goto('file://'+process.cwd()+'/final/p.html');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(300);
await p.screenshot({path:`final/f${i+1}.jpg`,type:'jpeg',quality:92});}
await b.close()})();
