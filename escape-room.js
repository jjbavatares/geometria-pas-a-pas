(()=>{
'use strict';
const D=window.ESCAPE_DATA,root=document.getElementById('game');
let state=null;
let view='observe',reviewIndex=0;
let solutionStep=0,guidePage=0,modalOpener=null;
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const portraits=[
 {key:'benvinguda',frame:'full',alt:'La Guspira de cos sencer, donant la benvinguda amb la mà oberta'},
 {key:'explica',frame:'half',alt:'La Guspira de mig cos, explicant amb un escaire'},
 {key:'pensa',frame:'close',alt:'La Guspira de pit en amunt, pensant amb la mà a la barbeta'},
 {key:'observa',frame:'half',alt:'La Guspira de mig cos, observant amb una llibreta i un llapis'},
 {key:'celebra',frame:'full',alt:'La Guspira de cos sencer, animant amb el polze amunt'}
];
let trialPortraits=portraits;
const coach=(message,portrait=portraits[0])=>`<aside class="escape-coach portrait-${portrait.frame}" aria-label="La Guspira t’acompanya"><img src="assets/guspira-${portrait.key}.png" width="160" height="210" alt="${portrait.alt}"><p>${message}</p></aside>`;
function drawing(shape,p,label,scale,hideHeight=false){
 const w=p.w*scale,h=p.h*scale,x=(260-w)/2,y=190-h;
 const geometry=shape==='triangle'?`<path d="M${x} 190 H${x+w} L${x} ${y} Z"/>`:`<rect x="${x}" y="${y}" width="${w}" height="${h}"/>`;
 return `<svg viewBox="0 0 260 260" role="img" aria-label="${escape(label)}: base ${p.w} centímetres, altura ${hideHeight?'desconeguda':p.h+' centímetres'}"><title>${escape(label)}</title><g fill="#c9eee4" stroke="#006e65" stroke-width="3">${geometry}</g><path d="M${x+14} 190 V176 H${x}" fill="none" stroke="#006e65" stroke-width="2"/><text class="dim" x="130" y="230" text-anchor="middle">${p.w} cm</text><text class="dim" x="${x-10}" y="${y+h/2+8}" text-anchor="end">${hideHeight?'?':p.h}</text><text x="130" y="30" text-anchor="middle">${escape(label)}</text></svg>`;
}
function visuals(q){
 // All displayed figures in a trial use the same centimetre-to-pixel scale.
 const sizes=[q.initial,...(q.final?[q.final]:[]),...(q.category==='detecta'?q.choices.map(c=>c.dimensions):[])];
 const scale=Math.min(26,140/Math.max(...sizes.map(p=>Math.max(p.w,p.h))));
 let panels=drawing(q.shape,q.initial,'Model inicial',scale);
 if(['compara','completa'].includes(q.category))panels+=drawing(q.shape,q.final,'Figura final',scale,q.category==='completa');
 if(q.category==='detecta')panels+=q.choices.map((c,i)=>drawing(q.shape,c.dimensions,`Versió ${String.fromCharCode(65+i)}`,scale)).join('');
 return `<div class="trial-visual"><div class="shape-grid${q.category==='detecta'?' many':''}${sizes.length===1?' single':''}">${panels}</div><p class="scene-caption">Les mesures són en centímetres. La base és a baix; l’altura, a l’esquerra.<br>${q.shape==='triangle'?'Tots els triangles del dibuix tenen un angle recte.':'Totes les figures del dibuix són rectangles.'}</p></div>`;
}
function intro(){
 root.innerHTML=`<main id="game-main" class="escape-main intro-main" tabindex="-1"><div class="escape-intro"><section class="intro-copy"><p class="escape-kicker">ESCAPE ROOM · 5 PROVES CURTES</p><h1>L’illa de les proporcions</h1><p>Obre cinc portes amb la Guspira: compara, amplia i redueix figures.</p>${coach('Anirem <strong>un pas cada vegada</strong>, sense límit de temps.')}<div class="escape-example"><h2>La idea que practicarem</h2><p><strong>Proporcionalitat:</strong> totes les longituds corresponents canvien pel <strong>mateix factor</strong>.</p><p class="intro-detail">Base: 2 → 4 cm. Altura: 3 → 6 cm. Totes dues es multipliquen per <strong>2</strong>; la forma es manté.</p></div><div class="materials"><p><strong>Llapis i paper</strong> et poden ajudar. <strong>Calculadora opcional.</strong></p></div><div class="intro-detail"><h2>Com juguem?</h2><ol class="escape-rules"><li>Observa i tria entre <b>cinc opcions</b>.</li><li>Primer error: utilitza <b>Ajuda 1</b>. Segon error: <b>Ajuda 2</b>.</li><li>Després de l’ajuda 2, un altre error mostra la solució.</li></ol><p>Cada prova compta una vegada. Amb <strong>4 o 5 encerts</strong>, completes la missió. Les ajudes no resten punts.</p></div><button class="escape-btn secondary small guide-button" data-action="guide">Com juguem?</button></section><div class="intro-launch"><figure class="escape-art"><img src="assets/escape-illa.png" width="1672" height="941" alt="L’illa de les proporcions: platja, bosc, jardí, pont i far"><figcaption>Cinc llocs, cinc idees. Un pas cada vegada.</figcaption></figure><button class="escape-btn start-button" data-action="start">Comença l’aventura →</button><p class="sound-note">Pots desactivar el so amb el botó superior.</p></div></div></main>`;
}
function scoreboard(){return `<div class="scoreboard" role="group" aria-label="Resultats: ${state.correct} encerts i ${state.wrong} errors, de 5 proves"><div class="score-labels"><span class="score-good">✓ Encerts: ${state.correct}</span><span class="score-middle">${state.results.length} de 5</span><span class="score-bad">× Errors: ${state.wrong}</span></div><div class="score-track" aria-hidden="true">${Array.from({length:5},(_,i)=>`<span class="score-slot ${i<state.correct?'good':i>=5-state.wrong?'bad':''}"></span>`).join('')}</div></div>`;}
function explanation(q){return `<p><strong>Resposta correcta: ${escape(q.choices.find(c=>c.id===q.correct).label)}.</strong></p><ol>${q.explanation.map(s=>`<li>${escape(s)}</li>`).join('')}</ol>`;}
function trial(focus=null){
 const q=state.questions[state.index],scene=D.scenes[q.category];
 const answerPrompt={compara:'Tenen la mateixa forma? Tria els factors correctes.',amplia:`Multiplica totes les longituds per ${q.final?q.final.w/q.initial.w:1}.`,redueix:'Redueix totes les longituds a la meitat.',completa:`La base final fa ${q.final?.w} cm. Quant fa l’altura?`,detecta:'Quina versió està deformada?'}[q.category];
 const initialText=`Inicial: base ${q.initial.w} cm; altura ${q.initial.h} cm.${q.category==='compara'?` Final: base ${q.final.w} cm; altura ${q.final.h} cm.`:''}`;
 const needsHint=!state.resolved&&state.attempts>state.hints;
 const hintButton=n=>`<button class="escape-btn secondary small" data-action="hint${n}"${state.hints>=n?'':state.attempts===n&&state.hints===n-1?'':' disabled'}>${state.hints>=n?'↻ ':''}Ajuda ${n}</button>`;
 root.innerHTML=`<main id="game-main" class="escape-main trial-main" tabindex="-1">${scoreboard()}<div class="trial-layout"><aside class="trial-scene"><figure class="escape-art"><img src="assets/escape-${scene.image}.png" width="1672" height="941" alt="${scene.alt}"><figcaption>${scene.title}</figcaption></figure>${coach('<strong>El mateix factor</strong> per a totes les longituds.',trialPortraits[state.index])}</aside><article class="trial-card view-${view}" data-question="${q.id}"><div class="trial-heading"><p class="escape-kicker">PROVA ${state.index+1} DE 5 · ${scene.goal.toUpperCase()}</p><h1 id="trial-title" tabindex="-1">${scene.title}</h1><p id="trial-prompt" class="trial-prompt">${escape(q.prompt)}</p></div><nav class="trial-view-nav" aria-label="Passos de la prova"><button data-action="observe" aria-pressed="${view==='observe'}">1. Observa</button><button data-action="answer" aria-pressed="${view==='answer'}">2. Respon</button></nav><div class="trial-workspace">${visuals(q)}<div class="answer-workspace"><p class="answer-prompt">${answerPrompt}</p><p class="initial-measures">${initialText}</p><div class="answer-options" role="group" aria-labelledby="trial-prompt">${q.choices.map((c,i)=>`<button class="answer-option ${state.resolved?(c.id===q.correct?'correct-answer':c.id===state.selected?'wrong-answer':''):state.tried.includes(c.id)?'tried':''}" data-choice="${c.id}" aria-pressed="${state.selected===c.id}"${state.resolved||needsHint||state.tried.includes(c.id)?' disabled':''}><span class="choice-letter">${String.fromCharCode(65+i)}</span><span>${q.category==='detecta'?`Versió ${String.fromCharCode(65+i)}: `:''}${escape(c.label)}</span></button>`).join('')}</div><div class="trial-controls"><p class="attempt-note" role="status">${state.resolved?'Prova completada.':needsHint?`Encara no. Consulta l’Ajuda ${state.attempts}.`:state.hints?'Aplica l’ajuda i tria una altra resposta.':'Tria una opció i comprova-la.'}</p>${state.resolved?`<button class="escape-btn" data-action="solution">Veure la solució →</button>`:`<button class="escape-btn" data-action="check"${needsHint||!state.selected||state.tried.includes(state.selected)?' disabled':''} aria-label="Comprova la resposta">Comprova</button>`}<div class="hint-buttons">${hintButton(1)}${hintButton(2)}</div></div></div></div><button class="escape-btn observe-next" data-action="answer">Tria la resposta →</button></article></div></main>`;
 if(focus)document.getElementById(focus)?.focus({preventScroll:true});
}
function results(){
 const good=state.correct>=4;window.ESCAPE_AUDIO.play(good?'victory':'defeat');
 root.innerHTML=`<main id="game-main" class="escape-main results-main" tabindex="-1">${scoreboard()}<section class="result-panel"><div class="result-hero ${good?'':'practice'}"><p class="escape-kicker">${good?'VICTÒRIA · HAS ARRIBAT AL FAR':'PODEM TORNAR-HO A INTENTAR'}</p><h1 id="result-title" tabindex="-1">${good?'Victòria! Enhorabona!':'Missió no superada. Tornem-ho a provar!'}</h1><p>${good?'Has aplicat bé la proporcionalitat.':'Practiquem una altra vegada amb proves noves.'} <strong>Totes les longituds canvien pel mateix factor.</strong></p>${coach('Has fet <strong>'+state.correct+' encerts de 5</strong>. Cada prova ens ajuda a aprendre.',good?portraits[4]:portraits[2])}<div class="escape-actions"><button class="escape-btn" data-action="start">Torna a jugar</button><button class="escape-btn secondary" data-action="review">Revisa les cinc proves</button></div></div><figure class="escape-art result-art"><img src="assets/escape-${good?'far':'illa'}.png" width="1672" height="941" alt="${good?'El far il·luminat de l’illa':'L’illa i el camí per practicar una altra vegada'}"><figcaption>${good?'Has completat la missió!':'La Guspira t’espera per tornar a practicar.'}</figcaption></figure></section></main>`;
 document.getElementById('result-title').focus({preventScroll:true});window.scrollTo(0,0);
}
function start(){
 window.ESCAPE_AUDIO.stop();window.ESCAPE_AUDIO.unlock();
 let previous=[];
 try{const stored=JSON.parse(localStorage.getItem('geometria-escape-previous')||'[]');if(Array.isArray(stored))previous=stored;}catch{}
 const questions=D.select(previous);state=D.newState(questions);trialPortraits=D.shuffle(portraits);view='observe';
 try{localStorage.setItem('geometria-escape-previous',JSON.stringify(questions.map(q=>q.id)));}catch{}
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
 view='answer';trial();
 dialog(`Ajuda ${n}`,`<p>${escape(state.questions[state.index].hints[n-1])}</p>`,`<button class="escape-btn" data-action="close-dialog">Ho he llegit. Torna a la prova →</button>`,'hint');
}
function showSolution(review=false){
 const q=review?state.results[reviewIndex].question:state.questions[state.index];
 const answer=q.choices.find(c=>c.id===q.correct).label;
 dialog(review?`Revisió ${reviewIndex+1} de 5`:state.selected===q.correct?'Ben fet! Porta oberta.':'Mirem la solució junts.',`${review?`<p class="review-prompt">${escape(q.prompt)}</p>`:''}<p class="solution-answer"><strong>Resposta correcta: ${escape(answer)}</strong></p><p class="step-label">Pas ${solutionStep+1} de ${q.explanation.length}</p><p class="solution-step">${escape(q.explanation[solutionStep])}</p>`,
 `<div class="step-navigation"><button class="escape-btn secondary small" data-action="step-back"${solutionStep===0?' disabled':''}>← Pas anterior</button><button class="escape-btn secondary small" data-action="step-forward"${solutionStep===q.explanation.length-1?' disabled':''}>Pas següent →</button></div>${review?`<div class="review-navigation"><button class="escape-btn secondary small" data-action="review-back"${reviewIndex===0?' disabled':''}>← Prova anterior</button><button class="escape-btn secondary small" data-action="review-forward"${reviewIndex===4?' disabled':''}>Prova següent →</button></div>`:`<button class="escape-btn" data-action="next">${state.index===4?'Mira el resultat final':'Continua a la prova següent'} →</button>`}`,
 review?'review':'solution');
}
function showGuide(){
 const pages=[
  ['La proporcionalitat','Totes les longituds corresponents canvien pel <strong>mateix factor</strong>.','Base: 2 → 4 cm. Altura: 3 → 6 cm. Totes dues es multipliquen per <strong>2</strong>; la forma es manté.'],
  ['Com juguem?','Observa el dibuix. Tria entre <strong>cinc opcions</strong> i comprova la resposta.','Primer error: utilitza <strong>Ajuda 1</strong>. Si tornes a fallar, utilitza <strong>Ajuda 2</strong>. Després, un altre error mostra la solució explicada.'],
  ['Al teu ritme','<strong>Llapis i paper</strong> poden ajudar. La <strong>calculadora és opcional</strong>. No hi ha límit de temps.','Cada prova compta una vegada. Les ajudes no resten punts. Amb <strong>4 o 5 encerts</strong>, completes la missió. Pots desactivar el so amb el botó superior.']
 ];
 const p=pages[guidePage];
 dialog(p[0],`<p class="step-label">Guia ${guidePage+1} de 3</p><p>${p[1]}</p><p>${p[2]}</p>`,`<button class="escape-btn secondary small" data-action="guide-back"${guidePage===0?' disabled':''}>← Anterior</button>${guidePage<2?'<button class="escape-btn" data-action="guide-forward">Següent →</button>':'<button class="escape-btn" data-action="close-dialog">Ja ho tinc!</button>'}`,'guide');
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
 if(action==='guide'){guidePage=0;showGuide();return;}
 if(action==='guide-back'||action==='guide-forward'){guidePage+=action==='guide-back'?-1:1;showGuide();return;}
 if(action==='start'){start();return;}
 if(!state)return;
 if(action==='observe'||action==='answer'){view=action==='observe'?'observe':'answer';trial('trial-title');return;}
 if(action==='hint1'||action==='hint2'){showHint(action==='hint1'?1:2);return;}
 if(action==='solution'){solutionStep=0;showSolution();return;}
 if(action==='review'){reviewIndex=0;solutionStep=0;showSolution(true);return;}
 if(action==='step-back'||action==='step-forward'){const review=root.querySelector('dialog')?.dataset.dialog==='review';solutionStep+=action==='step-back'?-1:1;showSolution(review);return;}
 if(action==='review-back'||action==='review-forward'){reviewIndex+=action==='review-back'?-1:1;solutionStep=0;showSolution(true);return;}
 if(action==='check'&&state.selected){
  const outcome=D.submit(state,state.selected);
  if(outcome==='correct'||outcome==='wrong')window.ESCAPE_AUDIO.play(outcome);
  if(outcome!=='ignored'){
   view='answer';trial();
   if(state.resolved){solutionStep=0;showSolution();}
   else root.querySelector(`[data-action="hint${state.attempts}"]`)?.focus({preventScroll:true});
  }
 }
 if(action==='next'&&state.resolved){closeDialog();state.index++;if(state.index===5)results();else{Object.assign(state,{attempts:0,hints:0,selected:null,tried:[],resolved:false});view='observe';trial('trial-title');window.scrollTo(0,0);}}
});
intro();
})();

