import fs from 'node:fs';
const chapters=JSON.parse(fs.readFileSync('content-original.json','utf8'));
const p=text=>`<p>${text}</p>`;
let html=fs.readFileSync('dist/index.html','utf8');
const head=html.slice(0,html.indexOf('<main'))
.replace(/<meta name="description" content="[^"]*">/,'<meta name="description" content="Mind Performance es un proyecto en el que se reúnen docentes, instructores y guías provenientes de diversas tradiciones filosóficas.">')
.replace(/<title>.*?<\/title>/,'<title>Mind Performance Project</title>')
.replace(/<a class="header-cta"[\s\S]*?<\/a>/,'');
const intro=['Mind Performance es un proyecto en el que se reúnen docentes, instructores y guías provenientes de diversas tradiciones filosóficas, con el fin de crear programas contemplativos para quienes desean aprender, experimentar y vivir el poder de la mente.','Nuestros programas están orientados a mejorar la atención y comprensión – Mindfulness- con diferentes tipos recursos provenientes de tradiciones ancestrales a las cuales pertenecemos y de programas contemplativos avalados por laboratorios y universidades internacionales.'];
const retreat=chapters.find(x=>x.id==='retiro');
html=head+`<main id="contenido"><div id="home" class="page">
<section class="hero"><div class="hero-art" aria-hidden="true"><div class="ambient-light"></div></div><div class="hero-content"><p class="eyebrow">CONTEMPLATIVE COACHING</p><h1>Mind<br><em>Performance.</em></h1><a class="button" href="#introduccion">Introducción <span aria-hidden="true">↓</span></a></div></section>
<section id="introduccion" class="intro section"><div class="section-label">01 / INTRODUCCIÓN</div><div><h2>Introducción</h2><div class="intro-columns">${intro.map(p).join('')}</div></div></section>
<section id="recorrido" class="journey section"><div id="chapters"></div></section>
</div><div id="cursos" class="page subpage" hidden><p class="eyebrow">MIND PERFORMANCE</p><h1>Cursos</h1><div class="empty-rule" aria-hidden="true"></div></div>
<div id="colaboracion" class="page subpage" hidden><p class="eyebrow">MIND PERFORMANCE</p><h1>Colaboración</h1><div class="collab-tabs" role="tablist" aria-label="Colaboración"><button role="tab" aria-selected="true" aria-controls="fest" id="tab-fest">Mictlán Fest</button><button role="tab" aria-selected="false" aria-controls="artistas" id="tab-artistas" tabindex="-1">Artistas</button></div><section id="fest" role="tabpanel" aria-labelledby="tab-fest" class="collab-panel"><span class="oversized" aria-hidden="true">M.</span><h2>Mictlán Fest</h2></section><section id="artistas" role="tabpanel" aria-labelledby="tab-artistas" class="collab-panel" hidden><span class="oversized" aria-hidden="true">A.</span><h2>Artistas</h2></section></div>
<div id="centros" class="page subpage retreat-page" hidden><div class="retreat-heading"><p class="eyebrow">MIND PERFORMANCE</p><h1>Centros de retiro</h1></div><div class="retreat-composition"><figure class="retreat-landscape"><div class="retreat-image-frame"><img src="assets/identidad.png" alt="Mind Performance — Contemplative Coaching" width="828" height="414"></div></figure><section class="retreat-copy"><div class="retreat-copy-heading"><span class="section-label" aria-hidden="true">01</span><h2>${retreat.title}</h2></div><div>${retreat.text.map(p).join('')}</div></section></div></div></main>
<footer><div class="footer-top"><img src="assets/logo.png" alt="Mind Performance — Contemplative Coaching" width="260" height="132"><a href="#home">Inicio ↑</a></div><div class="footer-bottom"><span>© <span id="year"></span> Mind Performance Project</span></div></footer></body></html>`;
fs.writeFileSync('dist/index.html',html);
let js=fs.readFileSync('dist/app.js','utf8');
js='const chapters='+JSON.stringify(chapters)+';\n'+js.slice(js.indexOf('const container='));
js=js.replace('<span class="chapter-hint">${chapter.hint}</span>','');
js=js.replace('Mind Performance — Habitar tu mente','Mind Performance Project');
const start=js.indexOf('let timer=null');
const end=js.indexOf("document.querySelector('#year')",start);
js=js.slice(0,start)+js.slice(end);
fs.writeFileSync('dist/app.js',js);
fs.appendFileSync('dist/styles.css',`\n/* Align the retreat identity and supplied text to one editorial grid. */
summary{grid-template-columns:70px 1fr 30px}.hero{min-height:650px;max-height:900px}.hero h1{font-size:clamp(70px,9vw,140px)}.hero-content{width:100%}.hero .button{margin-top:20px}.intro-columns{grid-template-columns:1fr;max-width:800px;gap:8px}.intro-columns p{max-width:72ch}.journey{padding-top:65px}.empty-rule{height:1px;background:#b2817370;margin-top:55px}.subpage{min-height:75vh}.retreat-page{padding-top:160px}.retreat-heading{max-width:1100px;margin:0 auto 48px;border-bottom:1px solid #ffffff20;padding-bottom:32px}.retreat-heading h1{font-size:clamp(44px,5.5vw,76px);margin-bottom:0}.retreat-composition{max-width:1100px;margin:0 auto}.retreat-landscape{width:100%;max-width:none;margin:0;padding:clamp(18px,3vw,38px);background:linear-gradient(135deg,#223a44,#172b34);border:1px solid #b2817340;border-radius:6px;box-shadow:0 24px 70px #07151b40}.retreat-image-frame{max-width:828px;margin:0 auto;overflow:hidden;border:1px solid #ffffff18;border-radius:2px;box-shadow:0 8px 28px #07151b50}.retreat-landscape img{display:block;width:100%;height:auto;aspect-ratio:2/1;object-fit:contain;border-radius:0}.retreat-copy{margin-top:64px;padding-top:34px;border-top:1px solid #ffffff25;display:grid;grid-template-columns:1fr 1.8fr;gap:clamp(30px,5vw,75px)}.retreat-copy h2{font-size:clamp(30px,3vw,42px);margin:14px 0 0}.retreat-copy p{font-size:18px;line-height:1.9;color:#bcc8ce;margin:0 0 25px;max-width:68ch}.footer-top{padding-bottom:24px}
@media(max-width:700px){summary{grid-template-columns:25px 1fr 22px}.hero{min-height:650px}.hero h1{font-size:clamp(58px,15vw,100px)}.hero-content{padding-bottom:90px}.retreat-page{padding-top:130px}.retreat-heading{margin-bottom:28px;padding-bottom:26px}.retreat-heading h1{font-size:43px}.retreat-landscape{padding:14px}.retreat-copy{grid-template-columns:1fr;gap:24px;margin-top:36px;padding-top:28px}.retreat-copy p{font-size:18px}.retreat-copy h2{font-size:32px}.intro-columns{grid-template-columns:1fr}}
`);
console.log('Only supplied editorial content retained; retreat composition aligned.');
