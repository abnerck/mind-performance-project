import fs from 'node:fs';
let html=fs.readFileSync('dist/index.html','utf8');
const original='<div class="hero-content"><p class="eyebrow">CONTEMPLATIVE COACHING</p><h1>Mind<br><em>Performance.</em></h1><a class="button" href="#introduccion">Introducción <span aria-hidden="true">↓</span></a></div>';
const replacement='<div class="hero-content hero-brand-content"><h1 class="visually-hidden">Mind Performance</h1><figure class="hero-brand-frame"><img src="assets/identidad.png" alt="Mind Performance — Contemplative Coaching" width="828" height="414" fetchpriority="high"></figure><a class="button" href="#introduccion">Introducción <span aria-hidden="true">↓</span></a></div>';
if(!html.includes(original))throw Error('Hero markup did not match');
html=html.replace(original,replacement);
html=html.replace(/<figure class="retreat-landscape">[\s\S]*?<\/figure>/,'');
fs.writeFileSync('dist/index.html',html);
fs.appendFileSync('dist/styles.css',`\n/* Original identity becomes the central composition on the home page. */
.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}
.hero:has(.hero-brand-content){min-height:760px;height:auto;max-height:none}
.hero-brand-content{display:flex;flex-direction:column;align-items:center;padding:165px 8% 75px;gap:34px}
.hero-brand-frame{position:relative;width:100%;max-width:1040px;margin:0;padding:clamp(12px,2vw,24px);border:1px solid #b281735c;border-radius:7px;background:linear-gradient(135deg,#31505b66,#14262eaa);box-shadow:0 30px 90px #08151c70,inset 0 1px 0 #ffffff12}
.hero-brand-frame img{display:block;width:100%;height:auto;aspect-ratio:2/1;object-fit:contain;border-radius:3px;border:1px solid #ffffff14}
.hero-brand-content .button{margin-top:0;min-width:180px;justify-content:space-between}
.retreat-composition .retreat-copy{margin-top:0;padding-top:0;border-top:0}
@media(max-width:700px){.hero:has(.hero-brand-content){min-height:0}.hero-brand-content{padding:132px 6% 64px;gap:30px}.hero-brand-frame{padding:10px;border-radius:5px}.hero-brand-frame img{border-radius:2px}.hero-brand-content .button{font-size:16px}.retreat-composition .retreat-copy{margin-top:0;padding-top:0}}
`);
console.log('Original identity moved to home; removed from retreat page.');
