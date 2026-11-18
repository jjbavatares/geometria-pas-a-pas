/* Accés a les resolucions de pràctica amb la clau de cada grup. */
(()=>{
'use strict';
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const text=value=>escape(value).replace(/&lt;sub&gt;(.*?)&lt;\/sub&gt;/g,'<sub>$1</sub>');
const decode=value=>Uint8Array.from(atob(value),c=>c.charCodeAt(0));
window.GEOMETRIA_PRACTICE_ACCESS=(topic,level,index)=>{
 const id=topic+'-'+level.toLowerCase()+'-'+index;
 return '<details class="practice-resolution"><summary>Resolució pas a pas</summary>'+
  '<div class="practice-unlock-content"><form class="practice-unlock" data-topic="'+escape(topic)+'" data-level="'+escape(level)+'" data-index="'+index+'">'+
  '<label for="clau-'+id+'">Clau del grup '+escape(level)+'</label>'+
  '<div class="practice-unlock-fields"><input id="clau-'+id+'" name="access-key" type="password" required maxlength="80" autocomplete="off" autocapitalize="none" spellcheck="false" aria-describedby="clau-error-'+id+'">'+
  '<button type="submit">Obre la resolució</button></div>'+
  '<p id="clau-error-'+id+'" class="practice-key-message" role="alert"></p></form></div></details>';
};
function renderResolution(resolution){
 const math=window.GEOMETRIA_RENDER_MATH;
 return '<div class="resolution"><h4>Dades</h4><ul>'+
  resolution.data.map(value=>'<li>'+text(value)+'</li>').join('')+
  '</ul><h4>Resolució</h4><div class="formula"><span class="formula-inner">'+math(resolution.formula)+'</span></div>'+
  '<ol class="step-list">'+resolution.steps.map(step=>'<li><div><span class="step-caption">'+text(step.text)+'</span>'+
   (step.equation?'<span class="equation">'+math(step.equation)+'</span>':'')+'</div></li>').join('')+
  '</ol><h4>Solució</h4><p class="answer">'+text(resolution.answer)+'</p></div>';
}
document.addEventListener('submit',async event=>{
 const form=event.target;
 if(!form.matches('form.practice-unlock'))return;
 event.preventDefault();
 const input=form.elements.namedItem('access-key');
 const button=form.querySelector('button');
 const message=form.querySelector('[role="alert"]');
 if(button.disabled)return;
 if(!window.crypto?.subtle){
  message.textContent='Obre la web amb una connexió HTTPS per consultar la resolució.';
  return;
 }
 const password=input.value;
 input.value='';
 button.disabled=true;
 message.textContent='Comprovant la clau…';
 try{
  const pack=window.GEOMETRIA_PRACTICE_SOLUTIONS[form.dataset.level];
  const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveKey']);
  const key=await crypto.subtle.deriveKey(
   {name:'PBKDF2',hash:'SHA-256',salt:decode(pack.salt),iterations:150000},
   material,{name:'AES-GCM',length:256},false,['decrypt']);
  const bytes=await crypto.subtle.decrypt({name:'AES-GCM',iv:decode(pack.iv)},key,decode(pack.payload));
  const items=JSON.parse(new TextDecoder().decode(bytes));
  const id=form.dataset.topic+'/'+form.dataset.level+(Number(form.dataset.index)+1);
  const resolution=items[id];
  if(!resolution)throw new Error('Resolució absent');
  if(form.isConnected)form.closest('.practice-unlock-content').innerHTML=renderResolution(resolution);
 }catch{
  if(form.isConnected){
   message.textContent='La clau no és correcta per a aquest grup.';
   input.focus({preventScroll:true});
  }
 }finally{
  if(form.isConnected)button.disabled=false;
 }
});
})();
