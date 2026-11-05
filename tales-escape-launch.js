/* Accessos als jocs de Tales i Pitàgores. */
(()=>{
'use strict';
const root=document.getElementById('app');
const lessons={
 "Raó de semblança de longitud":{"slug":"longitud","title":"El taller de les maquetes","scene":"Un racó de l’illa de la geometria en estil còmic","intro":"Compara els costats corresponents de dues maquetes.","button":"Comença el joc"},
 "Raó de semblança d’àrea":{"slug":"area","title":"El jardí dels mosaics","scene":"Un racó de l’illa de la geometria en estil còmic","intro":"Descobreix com canvia la superfície dels mosaics.","button":"Comença el joc"},
 "Raó de semblança de volum":{"slug":"volum","title":"El magatzem de les caixes","scene":"Un racó de l’illa de la geometria en estil còmic","intro":"Calcula com canvia l’espai que ocupen les caixes.","button":"Comença el joc"},
 'Teorema del catet':{slug:'catet',title:'La passarel·la dels catets',scene:'Una passarel·la de còmic a l’illa',intro:'Relaciona cada catet amb la seva projecció i completa la passarel·la.',button:'Ves a la passarel·la'},
 'Teorema de l’altura':{slug:'altura',title:'La torre de l’altura',scene:'Una torre de còmic vora el mar',intro:'Identifica els dos trams de la hipotenusa i calcula l’altura per reforçar la torre.',button:'Puja a la torre'},
 'Teorema de Tales':{slug:'tales'},
 'Teorema de Pitàgores':{slug:'pitagores'}
};
function enhance(){
 const content=root.querySelector('.content');
 const lesson=lessons[content?.querySelector('.lesson-head h1')?.textContent];
 if(!lesson||content.querySelector('#escape-'+lesson.slug))return;
 const id='escape-'+lesson.slug;
 const pitagores=lesson.slug==='pitagores';
 content.querySelector(':scope > .guide')?.classList.add('tales-guide');
 const banner=document.createElement('section');banner.id=id;banner.className='escape-banner tales-banner';banner.setAttribute('aria-labelledby',id+'-title');
 banner.innerHTML=lesson.title?"<img src=\"assets/escapes/cartell-SLUG.webp\" width=\"1672\" height=\"941\" alt=\"SCENE\" loading=\"lazy\"><div><p class=\"escape-kicker\">TOPIC · ESCAPE ROOM</p><h2 id=\"TITLEID\">TITLE</h2><p>INTRO</p><p><strong>Deu proves</strong> de dificultat gradual, dues ajudes i un informe PDF. Sense límit de temps.</p><a class=\"escape-btn\" href=\"GAME\" target=\"_blank\" rel=\"noopener\" data-lesson-escape-launch>BUTTON ↗</a><p class=\"new-window-note\">S’obre en una finestra nova.</p><p class=\"new-window-note\" data-lesson-escape-fallback hidden>Si no s’ha obert, <a href=\"GAME\">obre el joc aquí</a>.</p></div>".replace(/SLUG|SCENE|TOPIC|TITLEID|TITLE|INTRO|GAME|BUTTON/g,key=>({SLUG:lesson.slug,SCENE:lesson.scene,TOPIC:content.querySelector('h1').textContent.toUpperCase(),TITLEID:id+'-title',TITLE:lesson.title,INTRO:lesson.intro,GAME:id+'.html',BUTTON:lesson.button}[key])):pitagores?`<img src="assets/escapes/cartell-pitagores.webp" width="1672" height="941" alt="Un bosc de còmic a l’illa de la geometria" loading="lazy"><div><p class="escape-kicker">TEOREMA DE PITÀGORES · ESCAPE ROOM</p><h2 id="escape-pitagores-title">El mirador de Pitàgores</h2><p>Segueix <strong>deu pistes</strong> amb la Guspira per arribar al mirador. Reconeix els catets i la hipotenusa, tria la fórmula i calcula la mesura que falta.</p><p>Cinc opcions, <strong>dues ajudes</strong> i la solució explicada pas a pas. <strong>Sense límit de temps.</strong></p><a class="escape-btn" href="escape-pitagores.html" target="_blank" rel="noopener" data-lesson-escape-launch>Entra al bosc ↗</a><p class="new-window-note">S’obre en una finestra nova.</p><p class="new-window-note" data-lesson-escape-fallback hidden>Si no s’ha obert, <a href="escape-pitagores.html">obre el joc aquí</a>.</p></div>`:`<img src="assets/escapes/cartell-tales.webp" width="1672" height="941" alt="Un pont de l’illa entre arbres geomètrics, en estil còmic científic" loading="lazy"><div><p class="escape-kicker">TEOREMA DE TALES · ESCAPE ROOM</p><h2 id="escape-tales-title">El pont de les paral·leles</h2><p>El pont està tancat. Obre <strong>cinc panys</strong> amb la Guspira: reconeix les paral·leles, relaciona els trams i troba les peces que falten.</p><p>Cinc opcions, <strong>dues ajudes</strong> i la solució explicada pas a pas. Els encerts amb ajuda també compten. <strong>Sense límit de temps.</strong></p><a class="escape-btn" href="escape-tales.html" target="_blank" rel="noopener" data-lesson-escape-launch>Travessa el pont ↗</a><p class="new-window-note">S’obre en una finestra nova.</p><p data-lesson-escape-fallback class="new-window-note" hidden>Si no s’ha obert, <a href="escape-tales.html">obre el joc aquí</a>.</p></div>`;
 content.querySelector(':scope > #teoria')?.after(banner);
 const link=document.createElement('a');link.href='#'+id;link.textContent='Escape Room';link.dataset.lessonEscapeJump=id;content.querySelector('.lesson-index a[href="#teoria"]')?.after(link);
}
function features(){const s=window.screen,W=s.availWidth||s.width,H=s.availHeight||s.height,w=Math.min(1180,Math.max(1,W-32)),h=Math.min(850,Math.max(1,H-80)),left=Math.round((Number.isFinite(s.availLeft)?s.availLeft:0)+(W-w)/2),top=Math.round((Number.isFinite(s.availTop)?s.availTop:0)+(H-h)/2);return `popup,width=${w},height=${h},left=${left},top=${top}`;}
document.addEventListener('click',e=>{
 const jump=e.target.closest('[data-lesson-escape-jump]');
 if(jump){e.preventDefault();document.getElementById(jump.dataset.lessonEscapeJump)?.scrollIntoView({block:'start'});return;}
 const launch=e.target.closest('[data-lesson-escape-launch]');
 if(!launch||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
 launch.parentElement.querySelector('[data-lesson-escape-fallback]').hidden=false;
 const gameWindow=window.open(launch.getAttribute('href')+'?popup=1','_blank',features());
 if(gameWindow){gameWindow.opener=null;e.preventDefault();}
});
new MutationObserver(enhance).observe(root,{childList:true});enhance();
})();
