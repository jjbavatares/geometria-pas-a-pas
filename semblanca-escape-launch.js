/* Millora limitada a Figures i cossos semblants: Inici conserva el seu contingut. */
(()=>{
'use strict';
const root=document.getElementById('app');
function enhance(){
 const content=root.querySelector('.content');
 if(content?.querySelector('.lesson-head h1')?.textContent!=='Figures i cossos semblants'||content.querySelector('#escape-figures'))return;
 const guide=content.querySelector(':scope > .guide');
 const image=guide?.querySelector('img');
 if(image){image.src='assets/guspira-observa.png';image.alt='La Guspira de mig cos, amb llibreta i llapis, observant les figures';guide.classList.add('semblance-guide');}
 const banner=document.createElement('section');banner.id='escape-figures';banner.className='escape-banner semblance-banner';banner.setAttribute('aria-labelledby','escape-figures-title');
 banner.innerHTML=`<img src="assets/escape-temple.png" width="1672" height="941" alt="El temple de les formes: portals i plantes geomètriques a l’illa" loading="lazy"><div><p class="escape-kicker">FIGURES I COSSOS SEMBLANTS · ESCAPE ROOM</p><h2 id="escape-figures-title">El temple de les formes</h2><p>El temple ha perdut les seves peces. Obre <strong>cinc portes</strong> amb la Guspira: observa, compara i descobreix quines figures i cossos conserven la forma.</p><p>Cinc opcions, dues ajudes i una explicació pas a pas. <strong>Sense límit de temps.</strong></p><a class="escape-btn" href="escape-semblanca.html" target="_blank" rel="noopener" data-semblanca-launch>Entra al temple ↗</a><p class="new-window-note">S’obre en una finestra nova.</p><p id="semblance-fallback" class="new-window-note" hidden>Si no s’ha obert, <a href="escape-semblanca.html">obre el joc aquí</a>.</p></div>`;
 guide?.after(banner);
 const nav=content.querySelector('.lesson-index');
 const link=document.createElement('a');link.href='#escape-figures';link.textContent='Escape Room';link.dataset.semblancaJump='';nav?.append(link);
}
function features(){const s=window.screen,W=s.availWidth||s.width,H=s.availHeight||s.height,w=Math.min(1180,Math.max(1,W-32)),h=Math.min(850,Math.max(1,H-80)),left=Math.round((Number.isFinite(s.availLeft)?s.availLeft:0)+(W-w)/2),top=Math.round((Number.isFinite(s.availTop)?s.availTop:0)+(H-h)/2);return `popup,width=${w},height=${h},left=${left},top=${top}`;}
document.addEventListener('click',e=>{
 if(e.target.closest('[data-semblanca-jump]')){e.preventDefault();document.getElementById('escape-figures')?.scrollIntoView({block:'start'});return;}
 if(!e.target.closest('[data-semblanca-launch]')||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
 document.getElementById('semblance-fallback').hidden=false;
 const gameWindow=window.open('escape-semblanca.html?popup=1','_blank',features());
 if(gameWindow){gameWindow.opener=null;e.preventDefault();}
});
new MutationObserver(enhance).observe(root,{childList:true});enhance();
})();
