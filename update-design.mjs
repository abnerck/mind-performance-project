import fs from 'node:fs';
const file='dist/index.html';
let html=fs.readFileSync(file,'utf8');
html=html.replace(/<div class="hero-art" aria-hidden="true">[\s\S]*?<\/svg><\/div>/,'<div class="hero-art" aria-hidden="true"><div class="ambient-light"></div></div>');
html=html.replace('<div class="retreat-landscape" aria-hidden="true"><span>EL SILENCIO TAMBIÉN ES UN ESPACIO.</span></div>','<figure class="retreat-landscape"><img src="assets/identidad.png" alt="Mind Performance — Contemplative Coaching. Identidad original con un cielo nocturno y montañas." width="828" height="414"><figcaption>EL SILENCIO TAMBIÉN ES UN ESPACIO.</figcaption></figure>');
fs.writeFileSync(file,html);
let css=fs.readFileSync('dist/styles.css','utf8');
css=css.replace(/font-size:(\d+)px/g,(match,size)=>{const n=Number(size);return n<=17?`font-size:${n<12?n+4:n+3}px`:match});
css+=`\n/* Spacious typography and a quiet, abstract atmosphere. */
:root{--muted:#bac6cc}
nav{gap:24px}header{gap:24px}.brand{font-size:15px}.brand small{font-size:10px;letter-spacing:2px}.header-cta{padding:10px 16px;white-space:nowrap;font-size:14px}.header-cta span{margin-left:12px}
.hero-art{background:radial-gradient(ellipse at 85% 56%,#b2817333 0%,transparent 50%),radial-gradient(ellipse at 62% 15%,#36616b4d 0%,transparent 55%),linear-gradient(135deg,#10232c,#1a303a 60%,#292e31)}
.hero-art:after{background:linear-gradient(90deg,#10232bc9,transparent 80%),linear-gradient(0deg,#12252f,transparent 35%)}
.ambient-light{position:absolute;right:-12%;top:6%;width:65%;height:90%;border-radius:50%;background:radial-gradient(ellipse,#b2817326,transparent 65%);filter:blur(50px)}
.hero-description{font-size:20px;line-height:1.8}.intro-columns,.chapter-content,.program-grid p,.pause p:not(.eyebrow){font-size:18px;line-height:1.85;color:#bcc8ce}.chapter-title{font-size:30px}.chapter-hint{font-size:16px;color:#afbdc5}.chapter-content{max-width:1050px}.intro-note{font-size:15px}.journey-heading>p{font-size:17px}.lead{font-size:20px;max-width:740px}.connections p{font-size:16px}.availability{font-size:17px}.breath-status{font-size:15px!important}.footer-top a{font-size:16px}.footer-bottom{font-size:12px;gap:20px;flex-wrap:wrap}.hero-bottom{font-size:11px;letter-spacing:1.5px}.hero-bottom>span:nth-child(2){display:none}
.retreat-landscape{height:auto;margin:50px 0;background:none;border-radius:0;display:block;padding:0;max-width:1100px}.retreat-landscape img{display:block;width:100%;height:auto;object-fit:contain;border-radius:3px}.retreat-landscape figcaption{padding:18px 0;font-size:13px;letter-spacing:2px;color:#c5a497;border-bottom:1px solid #ffffff20}
@media(max-width:1250px){.header-cta{display:none}nav{margin-left:auto;margin-right:0}}
@media(max-width:700px){.brand{font-size:12px}.brand small{font-size:9px;letter-spacing:1.5px}.menu{font-size:16px}.hero-description{font-size:18px}.eyebrow,.section-label{font-size:12px;letter-spacing:1.5px}.hero-content{padding-top:145px}.hero{min-height:800px;height:auto}.hero h1{font-size:clamp(42px,10.6vw,70px)}.hero-bottom{font-size:11px}.intro-columns,.chapter-content,.program-grid p,.pause p:not(.eyebrow){font-size:18px}.chapter-title{font-size:26px}.chapter-content{padding-left:0}.journey-heading>p{font-size:17px}.intro-note{font-size:15px}.lead{font-size:18px}.connections>a>span{font-size:12px;letter-spacing:1.5px}.footer-bottom{font-size:12px}.retreat-landscape{height:auto}.retreat-landscape figcaption{font-size:12px;letter-spacing:1px}.ambient-light{width:100%;right:-30%}.subpage{padding-top:145px}}
`;
fs.writeFileSync('dist/styles.css',css);
console.log('Updated typography, abstract hero and uncropped retreat image.');
