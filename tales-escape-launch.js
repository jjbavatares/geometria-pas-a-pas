/* Accessos als jocs de Tales i Pitàgores. */
(()=>{
'use strict';
const root=document.getElementById('app');
const lessons={
 'Teorema de Tales':{slug:'tales',portrait:'paralleles',alt:'La Guspira de mig cos, mostrant dues regles paral·leles'},
 'Teorema de Pitàgores':{slug:'pitagores',portrait:'pensa',alt:'La Guspira de pit en amunt, pensant amb la mà a la barbeta'}
};
function enhance(){
 const content=root.querySelector('.content');
 const lesson=lessons[content?.querySelector('.lesson-head h1')?.textContent];
 if(!lesson||content.querySelector('#escape-'+lesson.slug))return;
 const id='escape-'+lesson.slug;
 const pitagores=lesson.slug==='pitagores';
 const guide=content.querySelector(':scope > .guide'),image=guide?.querySelector('img');
 if(image){image.src='assets/guspira-'+lesson.portrait+'.png';image.alt=lesson.alt;guide.classList.add('tales-guide');}
 const banner=document.createElement('section');banner.id=id;banner.className='escape-banner tales-banner';banner.setAttribute('aria-labelledby',id+'-title');
 banner.innerHTML=pitagores?`<img src="assets/escape-bosc.png" width="1672" height="941" alt="Un bosc de còmic a l’illa de la geometria" loading="lazy"><div><p class="escape-kicker">TEOREMA DE PITÀGORES · ESCAPE ROOM</p><h2 id="escape-pitagores-title">El mirador de Pitàgores</h2><p>Segueix <strong>deu pistes</strong> amb la Guspira per arribar al mirador. Reconeix els catets i la hipotenusa, tria la fórmula i calcula la mesura que falta.</p><p>Cinc opcions, <strong>dues ajudes</strong> i la solució explicada pas a pas. <strong>Sense límit de temps.</strong></p><a class="escape-btn" href="escape-pitagores.html" target="_blank" rel="noopener" data-lesson-escape-launch>Entra al bosc ↗</a><p class="new-window-note">S’obre en una finestra nova.</p><p class="new-window-note" data-lesson-escape-fallback hidden>Si no s’ha obert, <a href="escape-pitagores.html">obre el joc aquí</a>.</p></div>`:`<img src="assets/escape-pont.png" width="1672" height="941" alt="Un pont de l’illa entre arbres geomètrics, en estil còmic científic" loading="lazy"><div><p class="escape-kicker">TEOREMA DE TALES · ESCAPE ROOM</p><h2 id="escape-tales-title">El pont de les paral·leles</h2><p>El pont està tancat. Obre <strong>cinc panys</strong> amb la Guspira: reconeix les paral·leles, relaciona els trams i troba les peces que falten.</p><p>Cinc opcions, <strong>dues ajudes</strong> i la solució explicada pas a pas. Els encerts amb ajuda també compten. <strong>Sense límit de temps.</strong></p><a class="escape-btn" href="escape-tales.html" target="_blank" rel="noopener" data-lesson-escape-launch>Travessa el pont ↗</a><p class="new-window-note">S’obre en una finestra nova.</p><p data-lesson-escape-fallback class="new-window-note" hidden>Si no s’ha obert, <a href="escape-tales.html">obre el joc aquí</a>.</p></div>`;
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
