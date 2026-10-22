/* Només Teorema de Tales. La portada i les altres lliçons es conserven. */
(()=>{
'use strict';
const root=document.getElementById('app');
function enhance(){
 const content=root.querySelector('.content');
 if(content?.querySelector('.lesson-head h1')?.textContent!=='Teorema de Tales'||content.querySelector('#escape-tales'))return;
 const guide=content.querySelector(':scope > .guide'),image=guide?.querySelector('img');
 if(image){image.src='assets/guspira-paralleles.png';image.alt='La Guspira de mig cos, mostrant dues regles paral·leles';guide.classList.add('tales-guide');}
 const banner=document.createElement('section');banner.id='escape-tales';banner.className='escape-banner tales-banner';banner.setAttribute('aria-labelledby','escape-tales-title');
 banner.innerHTML=`<img src="assets/escape-pont.png" width="1672" height="941" alt="Un pont de l’illa entre arbres geomètrics, en estil còmic científic" loading="lazy"><div><p class="escape-kicker">TEOREMA DE TALES · ESCAPE ROOM</p><h2 id="escape-tales-title">El pont de les paral·leles</h2><p>El pont està tancat. Obre <strong>cinc panys</strong> amb la Guspira: reconeix les paral·leles, relaciona els trams i troba les peces que falten.</p><p>Cinc opcions, <strong>dues ajudes</strong> i la solució explicada pas a pas. Els encerts amb ajuda també compten. <strong>Sense límit de temps.</strong></p><a class="escape-btn" href="escape-tales.html" target="_blank" rel="noopener" data-tales-launch>Travessa el pont ↗</a><p class="new-window-note">S’obre en una finestra nova.</p><p id="tales-fallback" class="new-window-note" hidden>Si no s’ha obert, <a href="escape-tales.html">obre el joc aquí</a>.</p></div>`;
 content.querySelector('#exemple')?.before(banner);
 const link=document.createElement('a');link.href='#escape-tales';link.textContent='Escape Room';link.dataset.talesJump='';content.querySelector('.lesson-index')?.append(link);
}
function features(){const s=window.screen,W=s.availWidth||s.width,H=s.availHeight||s.height,w=Math.min(1180,Math.max(1,W-32)),h=Math.min(850,Math.max(1,H-80)),left=Math.round((Number.isFinite(s.availLeft)?s.availLeft:0)+(W-w)/2),top=Math.round((Number.isFinite(s.availTop)?s.availTop:0)+(H-h)/2);return `popup,width=${w},height=${h},left=${left},top=${top}`;}
document.addEventListener('click',e=>{
 if(e.target.closest('[data-tales-jump]')){e.preventDefault();document.getElementById('escape-tales')?.scrollIntoView({block:'start'});return;}
 if(!e.target.closest('[data-tales-launch]')||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
 document.getElementById('tales-fallback').hidden=false;
 const gameWindow=window.open('escape-tales.html?popup=1','_blank',features());
 if(gameWindow){gameWindow.opener=null;e.preventDefault();}
});
new MutationObserver(enhance).observe(root,{childList:true});enhance();
})();
