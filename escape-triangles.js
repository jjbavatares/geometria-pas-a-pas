(()=>{
'use strict';
const D=window.TRIANGLES_ESCAPE_DATA,root=document.getElementById('game');
let state=null;
let reviewIndex=0;
let solutionStep=0,modalOpener=null;
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const portraits=[
 {key:'observa',frame:'half',alt:'La Guspira de mig cos, amb llibreta i llapis'},
 {key:'explica',frame:'half',alt:'La Guspira de mig cos, explicant amb un escaire'},
 {key:'pensa',frame:'close',alt:'La Guspira de pit en amunt, pensant amb la mà a la barbeta'},
 {key:'benvinguda',frame:'full',alt:'La Guspira de cos sencer, amb la mà oberta'},
 {key:'celebra',frame:'full',alt:'La Guspira de cos sencer, animant amb el polze amunt'}
];
let trialPortraits=portraits;
const coach=(message,portrait=portraits[1])=>`<aside class="escape-coach portrait-${portrait.frame}" aria-label="La Guspira t’acompanya"><img src="assets/guspira-${portrait.key}.png" width="160" height="210" alt="${portrait.alt}"><p>${message}</p></aside>`;
function intro(){
 root.innerHTML=`<main id="game-main" class="escape-main picture-intro" tabindex="-1"><section class="temple-welcome"><div class="welcome-copy"><p class="escape-kicker">TRIANGLES SEMBLANTS · 5 PROVES</p><h1>El far dels triangles</h1><p>Obre cinc panys i encén el far amb la Guspira.</p>${coach('<span class="criteria-key"><span><strong>AA</strong>: angle, angle.</span><span><strong>CCC</strong>: costat, costat, costat.</span><span><strong>CAC</strong>: costat, angle, costat.</span></span>')}<ol class="picture-rules"><li><b>Mira</b> el model.</li><li><b>Tria</b> una de les cinc opcions.</li><li>Prem <b>Comprova</b>.</li></ol><p class="welcome-hints">Si falles, llegeix <b>Ajuda 1</b>. Si tornes a fallar, <b>Ajuda 2</b>. El tercer error mostra la solució.</p><p class="welcome-materials"><strong>Llapis i paper opcionals. No cal calculadora.</strong></p><p class="welcome-score"><strong>4 o 5 encerts: victòria.</strong> Sense límit de temps. Les ajudes no resten punts.</p></div><div class="welcome-art"><img src="assets/escape-far.png" width="1672" height="941" alt="Far de l’illa amb arbres geomètrics"><button class="escape-btn start-button" data-action="start">Comença l’aventura →</button><p>So opcional (botó superior).</p></div></section></main>`;
}
function scoreboard(){return `<div class="scoreboard" role="group" aria-label="Resultats: ${state.correct} encerts i ${state.wrong} errors, de 5 proves"><div class="score-labels"><span class="score-good">✓ Encerts: ${state.correct}</span><span class="score-middle">${state.results.length} de 5</span><span class="score-bad">× Errors: ${state.wrong}</span></div><div class="score-track" aria-hidden="true">${Array.from({length:5},(_,i)=>`<span class="score-slot ${i<state.correct?'good':i>=5-state.wrong?'bad':''}"></span>`).join('')}</div></div>`;}
function answerName(q){return `Opció ${String.fromCharCode(65+q.choices.findIndex(c=>c.id===q.correct))}`;}
function picture(p){return window.TRIANGLES_ESCAPE_DIAGRAMS.figure(p);}
function extent(){return 1;}
function trial(focus=null){
 const q=state.questions[state.index],scene=D.scenes[q.category];
 const max=Math.max(...q.choices.map(c=>extent(c.figure)),q.model?extent(q.model):0);
 const scale=140/max;
 const needsHint=!state.resolved&&state.attempts>state.hints;
 const hintButton=n=>{
  const used=state.hints>=n,ready=!state.resolved&&state.attempts===n&&state.hints===n-1;
  return `<button class="escape-btn secondary small${ready?' hint-ready':used?' hint-used':''}" data-action="hint${n}"${used||ready?'':' disabled'}>${used?'↻ ':ready?'💡 ':''}Ajuda ${n}</button>`;
 };
 root.innerHTML=`<main id="game-main" class="escape-main picture-main" tabindex="-1">${scoreboard()}<article class="picture-trial" data-question="${q.id}"><header class="picture-heading"><div><p class="escape-kicker">PROVA ${state.index+1} DE 5 · ${scene.title}</p><h1 id="trial-title" tabindex="-1">${escape(q.prompt)}</h1></div><img class="picture-guspira" src="assets/guspira-${trialPortraits[state.index].key}.png" alt="${trialPortraits[state.index].alt}"></header><div class="picture-play${q.model?'':' no-model'}">${q.model?`<figure class="picture-model"><figcaption>MODEL</figcaption>${picture({...q.model,label:'Model'},scale)}<p>Compara les dades.</p></figure>`:''}<div class="picture-options" role="group" aria-labelledby="trial-title">${q.choices.map((c,i)=>`<button class="picture-option ${state.resolved?(c.id===q.correct?(state.selected===q.correct?'correct-answer':'revealed-answer'):c.id===state.selected?'wrong-answer':''):state.tried.includes(c.id)?'tried':''}" data-choice="${c.id}" aria-label="Opció ${String.fromCharCode(65+i)}" aria-pressed="${state.selected===c.id}"${state.resolved||needsHint||state.tried.includes(c.id)?' disabled':''}><span class="picture-letter">${String.fromCharCode(65+i)}</span>${picture({...c.figure,label:`Opció ${String.fromCharCode(65+i)}`},scale)}</button>`).join('')}</div></div><footer class="picture-controls"><p class="attempt-note" role="status">${state.resolved?(state.selected===q.correct?'✓ Prova encertada.':'× Prova no encertada. Solució mostrada.'):needsHint?`Encara no. Prem Ajuda ${state.attempts}.`:state.hints?'Compara les dades i torna a provar.':'Tria una opció. Després prem Comprova.'}</p><div class="picture-actions">${state.resolved?`<button class="escape-btn" data-action="solution">Veure la solució →</button>`:`<button class="escape-btn" data-action="check"${needsHint||!state.selected||state.tried.includes(state.selected)?' disabled':''} aria-label="Comprova la resposta">Comprova ✓</button>`}<div class="hint-buttons">${hintButton(1)}${hintButton(2)}</div></div></footer></article></main>`;
 if(focus)document.getElementById(focus)?.focus({preventScroll:true});
}
function results(){
 const good=state.correct>=4;window.ESCAPE_AUDIO.play(good?'victory':'defeat');
 root.innerHTML=`<main id="game-main" class="escape-main results-main" tabindex="-1">${scoreboard()}<section class="result-panel"><div class="result-hero ${good?'':'practice'}"><p class="escape-kicker">${good?'VICTÒRIA · HAS ENCÈS EL FAR':'PODEM TORNAR-HO A INTENTAR'}</p><h1 id="result-title" tabindex="-1">${good?'Victòria! Enhorabona!':'Missió no superada. Tornem-ho a provar!'}</h1><p>${good?'Has practicat els criteris de semblança de triangles.':'Revisem angles i costats amb proves noves.'} <strong>Angles iguals i costats proporcionals.</strong></p>${coach('Has fet <strong>'+state.correct+' encerts de 5</strong>. Cada prova ens ajuda a aprendre.',good?portraits[4]:portraits[2])}<div class="escape-actions"><button class="escape-btn" data-action="start">Torna a jugar</button><button class="escape-btn secondary" data-action="review">Revisa les cinc proves</button></div></div><figure class="escape-art result-art"><img src="assets/escape-far.png" width="1672" height="941" alt="El far dels triangles a l’illa"><figcaption>${good?'Has completat la missió!':'La Guspira t’espera per tornar a practicar.'}</figcaption></figure></section></main>`;
 document.getElementById('result-title').focus({preventScroll:true});window.scrollTo(0,0);
}
function start(){
 window.ESCAPE_AUDIO.stop();window.ESCAPE_AUDIO.unlock();
 let previous=[];
 try{const stored=JSON.parse(localStorage.getItem('geometria-triangles-escape-previous')||'[]');if(Array.isArray(stored))previous=stored;}catch{}
 const questions=D.select(previous);state=D.newState(questions);trialPortraits=D.shuffle(portraits);
 try{localStorage.setItem('geometria-triangles-escape-previous',JSON.stringify(questions.map(q=>q.id)));}catch{}
 trial('trial-title');window.scrollTo(0,0);
}
function closeDialog(){
 root.querySelector('dialog')?.close();root.querySelector('dialog')?.remove();
 modalOpener?.focus({preventScroll:true});
}
function dialog(title,content,footer,kind){
 const previous=root.querySelector('dialog');
 if(!previous)modalOpener=document.activeElement;
 previous?.close();previous?.remove();
 root.insertAdjacentHTML('beforeend',`<dialog class="escape-dialog" data-dialog="${kind}" aria-labelledby="dialog-title"><div class="dialog-top"><h2 id="dialog-title">${title}</h2><button class="dialog-close" data-action="close-dialog" aria-label="Tanca aquesta finestra">×</button></div><div class="dialog-content">${content}</div><div class="dialog-actions">${footer}</div></dialog>`);
 const el=root.querySelector('dialog');el.addEventListener('cancel',event=>{event.preventDefault();closeDialog();});el.showModal();
}
function showHint(n){
 if(state.hints<n&&!D.useHint(state,n))return;
 trial();
 dialog(`Ajuda ${n}`,`<p>${escape(state.questions[state.index].hints[n-1])}</p>`,`<button class="escape-btn" data-action="close-dialog">Ho he llegit. Torna a la prova →</button>`,'hint');
}
function showSolution(review=false){
 const q=review?state.results[reviewIndex].question:state.questions[state.index];
 const answer=answerName(q);
 const lastStep=solutionStep===q.explanation.length-1;
 const good=review?state.results[reviewIndex].good:state.selected===q.correct;
 const outcome=good?'<p class="solution-status is-correct" role="status">✓ Has encertat aquesta prova.</p>':'<p class="solution-status is-incorrect" role="status"><b>× Aquesta prova compta com un error.</b><span>Et mostrem la solució per poder continuar.</span></p>';
 dialog(review?`Revisió ${reviewIndex+1} de 5`:good?'Ben fet! Pany obert.':'No has encertat aquesta prova.',`${review?`<p class="review-prompt">${escape(q.prompt)}</p>`:''}${outcome}<div class="solution-answer ${good?'':'solution-shown'}"><strong>${good?'Resposta correcta':'Solució mostrada'}: ${escape(answer)}</strong><div class="solution-picture">${picture({...q.choices.find(c=>c.id===q.correct).figure,label:answer},140/extent(q.choices.find(c=>c.id===q.correct).figure))}</div></div><p class="step-label">Pas ${solutionStep+1} de ${q.explanation.length}</p><p class="solution-step">${escape(q.explanation[solutionStep])}</p>`,
 `<div class="step-navigation"><button class="escape-btn secondary small" data-action="step-back"${solutionStep===0?' disabled':''}>← Pas anterior</button><button class="escape-btn secondary small" data-action="step-forward"${lastStep?' disabled':''}>Pas següent →</button></div>${review?`<div class="review-navigation"><button class="escape-btn secondary small" data-action="review-back"${reviewIndex===0?' disabled':''}>← Prova anterior</button><button class="escape-btn secondary small" data-action="review-forward"${reviewIndex===4||!lastStep?' disabled':''}>Prova següent →</button></div>`:`<button class="escape-btn" data-action="next"${lastStep?'':' disabled'}>${state.index===4?'Mira el resultat final':'Continua a la prova següent'} →</button>`}`,
 review?'review':'solution');
}
root.addEventListener('click',event=>{
 const choice=event.target.closest('[data-choice]');
 if(choice&&!choice.disabled&&state&&!state.resolved&&state.attempts<=state.hints){
  state.selected=choice.dataset.choice;
  root.querySelectorAll('[data-choice]').forEach(b=>b.setAttribute('aria-pressed',String(b===choice)));
  root.querySelector('[data-action="check"]').disabled=false;return;
 }
 const button=event.target.closest('[data-action]');if(!button||button.disabled)return;
 const action=button.dataset.action;
 if(action==='close-dialog'){closeDialog();return;}
 if(action==='start'){start();return;}
 if(!state)return;
 if(action==='hint1'||action==='hint2'){showHint(action==='hint1'?1:2);return;}
 if(action==='solution'){solutionStep=0;showSolution();return;}
 if(action==='review'){reviewIndex=0;solutionStep=0;showSolution(true);return;}
 if(action==='step-back'||action==='step-forward'){const review=root.querySelector('dialog')?.dataset.dialog==='review';solutionStep+=action==='step-back'?-1:1;showSolution(review);return;}
 if(action==='review-back'||action==='review-forward'){if(action==='review-forward'&&solutionStep!==state.results[reviewIndex].question.explanation.length-1)return;reviewIndex+=action==='review-back'?-1:1;solutionStep=0;showSolution(true);return;}
 if(action==='check'&&state.selected){
  const outcome=D.submit(state,state.selected);
  if(outcome==='correct')window.ESCAPE_AUDIO.play('correct');
  else if(outcome==='retry'||outcome==='wrong')window.ESCAPE_AUDIO.play('wrong');
  if(outcome!=='ignored'){
   trial();
   if(state.resolved){solutionStep=0;showSolution();}
   else root.querySelector(`[data-action="hint${state.attempts}"]`)?.focus({preventScroll:true});
  }
 }
 if(action==='next'&&state.resolved&&solutionStep===state.questions[state.index].explanation.length-1){closeDialog();state.index++;if(state.index===5)results();else{Object.assign(state,{attempts:0,hints:0,selected:null,tried:[],resolved:false});trial('trial-title');window.scrollTo(0,0);}}
});
document.addEventListener('click',event=>{
 const homeLink=event.target.closest('[data-return-home]');
 if(!homeLink||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
 event.preventDefault();window.ESCAPE_AUDIO.stop();
 const homeUrl=new URL(homeLink.getAttribute('href'),location.href).href;
 if(new URLSearchParams(location.search).get('popup')==='1'||window.opener){
  try{if(window.opener&&!window.opener.closed){window.opener.location.href=homeUrl;window.opener.focus();}}catch{}
  window.close();
  // Directly opened tabs cannot always be closed by the browser.
  setTimeout(()=>location.replace(homeUrl),250);
 }else location.assign(homeUrl);
});
intro();
})();

