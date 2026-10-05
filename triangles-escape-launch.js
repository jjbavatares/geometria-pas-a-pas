/* Millora limitada a Triangles semblants: Inici conserva el seu contingut. */
(()=>{
'use strict';
const root=document.getElementById('app');
function enhance(){
 const content=root.querySelector('.content');
 if(content?.querySelector('.lesson-head h1')?.textContent!=='Triangles semblants'||content.querySelector('#escape-triangles'))return;
 const guide=content.querySelector(':scope > .guide');
 const image=guide?.querySelector('img');
 if(image){image.src='assets/guspira-explica.png';image.alt='La Guspira de mig cos, explicant amb un escaire';guide.classList.add('triangles-guide');}
 const banner=document.createElement('section');banner.id='escape-triangles';banner.className='escape-banner triangles-banner';banner.setAttribute('aria-labelledby','escape-triangles-title');
 banner.innerHTML=`<img src="assets/escape-far.png" width="1672" height="941" alt="El far de l’illa amb arbres geomètrics" loading="lazy"><div><p class="escape-kicker">TRIANGLES SEMBLANTS · ESCAPE ROOM</p><h2 id="escape-triangles-title">El far dels triangles</h2><p>El far s’ha apagat. Obre <strong>cinc panys</strong> amb la Guspira: compara angles i costats, practica <strong>AA, CCC i CAC</strong> i torna a encendre la llum.</p><p>Cinc opcions, dues ajudes i una explicació pas a pas. <strong>Sense límit de temps.</strong></p><a class="escape-btn" href="escape-triangles.html" target="_blank" rel="noopener" data-triangles-launch>Entra al far ↗</a><p class="new-window-note">S’obre en una finestra nova.</p><p id="triangles-fallback" class="new-window-note" hidden>Si no s’ha obert, <a href="escape-triangles.html">obre el joc aquí</a>.</p></div>`;
 content.querySelector('#exemple')?.before(banner);
 const nav=content.querySelector('.lesson-index');
 const link=document.createElement('a');link.href='#escape-triangles';link.textContent='Escape Room';link.dataset.trianglesJump='';nav?.append(link);
}
function features(){const s=window.screen,W=s.availWidth||s.width,H=s.availHeight||s.height,w=Math.min(1180,Math.max(1,W-32)),h=Math.min(850,Math.max(1,H-80)),left=Math.round((Number.isFinite(s.availLeft)?s.availLeft:0)+(W-w)/2),top=Math.round((Number.isFinite(s.availTop)?s.availTop:0)+(H-h)/2);return `popup,width=${w},height=${h},left=${left},top=${top}`;}
document.addEventListener('click',e=>{
 if(e.target.closest('[data-triangles-jump]')){e.preventDefault();document.getElementById('escape-triangles')?.scrollIntoView({block:'start'});return;}
 if(!e.target.closest('[data-triangles-launch]')||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
 document.getElementById('triangles-fallback').hidden=false;
 const gameWindow=window.open('escape-triangles.html?popup=1','_blank',features());
 if(gameWindow){gameWindow.opener=null;e.preventDefault();}
});
new MutationObserver(enhance).observe(root,{childList:true});enhance();
})();
