import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
const chosen='65946b923b7ea809a62534a240429c8d08477c4e';
for(const file of ['index.html','app.js','styles.css']){
 const content=execFileSync('git',['-c','safe.directory=C:/Users/abner/mind-performance-web','show',`${chosen}:dist/${file}`]);
 fs.writeFileSync('dist/'+file,content);
}
fs.appendFileSync('dist/styles.css',`\n/* Color refinement of the selected design; layout and content stay intact. */
:root{--night:#12252F;--petrol:#1A303A;--slate:#14262E;--mountain:#1A1C1D;--rock:#221E1D;--sunset:#B28173;--rose:var(--sunset);--white:#FBFCFC}
body{background:var(--night);color:var(--white)}
.hero-art{background:radial-gradient(ellipse at 90% 52%,#B2817366 0%,transparent 53%),radial-gradient(ellipse at 55% 10%,#1A303A 0%,transparent 62%),linear-gradient(125deg,var(--night) 25%,var(--slate) 58%,var(--rock))}
.hero-art:after{background:linear-gradient(90deg,#12252FB8,transparent 82%),linear-gradient(0deg,var(--night),transparent 38%)}
.ambient-light{background:radial-gradient(ellipse,#B2817340,transparent 68%)}
.hero h1 em{color:var(--sunset)}
.button{background:var(--sunset);color:var(--night)}
.intro{background:var(--petrol);border-top:1px solid #B2817340;border-bottom:1px solid #B2817340}
.intro .section-label{color:var(--sunset)}
.journey{background:var(--slate)}
#chapters{border-radius:4px;overflow:hidden;border:1px solid #B2817333}
#chapters details{border-top:1px solid #FBFCFC20;padding-left:28px;padding-right:28px}
#chapters details:first-child{border-top:0}
#chapters details:last-child{border-bottom:0}
#socioemocional{background:var(--petrol)}
#atencion{background:var(--rock)}
#percepcion{background:var(--slate)}
#resiliencia{background:var(--mountain)}
#interdisciplinario{background:var(--rock)}
#retiro{background:var(--night)}
#chapters details[open]>summary{color:var(--white)}
#chapters details[open] .chapter-title{color:var(--sunset)}
.chapter-num,.chapter-plus{color:var(--sunset)}
.chapter-content{color:#FBFCFCD9}
#cursos{background:var(--petrol)}
#colaboracion{background:var(--rock)}
.collab-tabs{border-bottom-color:#B2817355}
.collab-tabs [aria-selected=true]{background:var(--sunset);color:var(--night);border-bottom-color:var(--sunset);border-radius:3px 3px 0 0;padding-left:22px;padding-right:22px}
.oversized{color:var(--sunset);opacity:.7}
.retreat-page{background:var(--mountain)}
.retreat-heading{border-bottom-color:var(--sunset)}
.retreat-copy h2{color:var(--sunset)}
.retreat-landscape{background:var(--rock);border-color:#B2817370}
.retreat-image-frame{border-color:#B2817340}
footer{background:var(--rock);border-top:1px solid #B2817340}
.footer-bottom{border-top-color:#B2817340}
.footer-top a{color:var(--white)}
.empty-rule{background:var(--sunset)}
@media(max-width:700px){#chapters details{padding-left:16px;padding-right:16px}nav{background:var(--slate);border-bottom-color:var(--sunset)}.collab-tabs [aria-selected=true]{padding-left:14px;padding-right:14px}}
`);
// Verify this update cannot change the selected page structure or copy.
for(const file of ['index.html','app.js']){
 const previous=execFileSync('git',['-c','safe.directory=C:/Users/abner/mind-performance-web','show',`${chosen}:dist/${file}`]);
 if(!fs.readFileSync('dist/'+file).equals(previous))throw Error('Unexpected change to '+file);
}
console.log('PASS: selected version restored; only palette styling changed.');
