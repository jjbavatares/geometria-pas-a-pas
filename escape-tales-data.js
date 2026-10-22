/* Cinc portes, sis variants per porta. Les dades són sempre de trams consecutius. */
(()=>{
'use strict';
const categories=['paralleles','homolegs','proporcio','mesura','pont'];
const scenes={paralleles:{title:'La porta de les paral·leles'},homolegs:{title:'Els cables bessons'},proporcio:{title:'El pany de les fraccions'},mesura:{title:'La peça que falta'},pont:{title:'L’últim tram del pont'}};
const bank=[];
const F=(n,d)=>['frac',String(n),String(d)];
const text=t=>({mode:'text',text:t});
const number=(value,unit='cm')=>({mode:'number',value,unit});
const proportion=(a,b,c,d)=>({mode:'proportion',left:[a,b],right:[c,d]});
const step=(text,equation=null)=>({text,equation});
function add(category,i,prompt,model,figures,hints,explanation,check){bank.push({id:`tales-${category}-${i+1}`,category,prompt,model,choices:figures.map((figure,j)=>({id:`p${j}`,figure})),correct:'p0',hints,explanation,check});}
const recognition=[
 ['Quines tres rectes són paral·leles?',['r, s i t','u i v','r i u','s i v','t i u'],'Segueix les tres rectes taronges.','r, s i t mantenen la mateixa direcció. No es tallen.'],
 ['Quines dues rectes tallen les tres paral·leles?',['u i v','r i s','s i t','r i t','r i u'],'Segueix les dues rectes blaves: passen per r, s i t.','u i v són les secants: tallen totes tres paral·leles.'],
 ['Per aplicar Tales, com han de ser r, s i t?',['Paral·leles','Secants entre elles','Perpendiculars entre elles','Amb separacions iguals','Amb llargades iguals'],'No cal que hi hagi la mateixa separació entre les paral·leles.','r, s i t han de ser paral·leles. Els trams no han de ser iguals: han de ser proporcionals.'],
 ['Quin grup de rectes manté la mateixa direcció?',['r, s i t','u i v','r i u','s i v','t i v'],'Mira les tres rectes taronges.','r, s i t tenen la mateixa direcció i no es tallen: són paral·leles.'],
 ['Quines són les secants del dibuix?',['u i v','r i s','s i t','r i t','r, s i t'],'Una secant talla altres rectes. Mira les dues rectes blaves.','u i v tallen r, s i t. Per això són les secants.'],
 ['Si allarguem r, s i t, es tallaran?',['No: són paral·leles','Sí: totes al mateix punt','Sí: perquè són secants','Només r i s','Només s i t'],'Les tres rectes taronges mantenen la mateixa direcció.','Les paral·leles no es tallen, encara que les allarguem.']
];
recognition.forEach(([prompt,answers,hint,reason],i)=>add('paralleles',i,prompt,{mode:'rails',labelsOnly:true,variant:i},answers.map(text),
 ['Una recta paral·lela manté la direcció d’una altra. Una secant talla altres rectes.',hint],
 [step(reason),step('Amb tres paral·leles que tallen dues secants, Tales relaciona els trams corresponents.')],{kind:'recognition',answer:answers[0]}));
const pairs=[['a','b'],['a′','b′'],['b','a'],['b′','a′'],['a','b'],['a′','b′']];
pairs.forEach(([target,answer],i)=>{
 const others=['a','b','a′','b′'].filter(x=>x!==answer);
 add('homolegs',i,`Quin tram correspon a ${target}?`,{mode:'rails',lettersOnly:true,highlight:target,variant:i},[answer,...others,'a + a′'].map(text),
 ['Busca el tram que queda entre les mateixes dues paral·leles, a l’altra secant.',`${target} i ${answer} tenen els mateixos límits: les mateixes dues rectes taronges.`],
 [step(`${target} i ${answer} queden entre les mateixes dues paral·leles.`),step(`Són trams homòlegs. En aquest dibuix, a correspon a b, i a′ correspon a b′.`)],{kind:'homologous',target,answer});
});
[[2,4,3],[3,6,4],[2,6,4],[4,8,6],[3,9,5],[5,10,4]].forEach(([a,b,c],i)=>{
 const d=b*c/a;
 add('proporcio',i,'Quina proporció relaciona bé les dades?',{mode:'rails',a,b,c,d,unknown:'d',unit:'cm'},
 [proportion(a,b,c,'x'),proportion(b,a,c,'x'),proportion(a,b,'x',c),proportion(a,b,c+1,'x'),proportion(a,b+1,c,'x')],
 ['Mantén les parelles: a amb b, i a′ amb b′. No canviïs l’ordre.',`Posa a = ${a} a dalt i b = ${b} a baix. A l’altra fracció, posa a′ = ${c} a dalt i x a baix.`],
 [step('Escrivim la fórmula dels apunts.',[F('a','b'),' = ',F('a′','b′')]),step('Substituïm cada lletra per la dada del mateix tram.',[F(a,b),' = ',F(c,'x')])],{kind:'proportion',a,b,c,d});
});
[[2,4,3],[3,6,5],[4,6,8],[5,10,3],[6,9,4],[2,6,3]].forEach(([a,b,c],i)=>{
 const d=b*c/a;
 add('mesura',i,'Quant mesura x? Troba la peça que falta.',{mode:'rails',a,b,c,d,unknown:'d',unit:'cm'},[d,d+1,d-1,d+2,d+3].map(v=>number(v)),
 ['Escriu dues fraccions iguals: a sobre b, i a′ sobre x. Després multiplica en creu.',`Multiplica ${c} · ${b}. Després divideix el producte entre ${a}.`],
 [step('Relacionem els trams corresponents.',[F(a,b),' = ',F(c,'x')]),step('Multipliquem en creu i aïllem x.',[`${a} · x = ${c} · ${b}`,['break'], 'x = ',F(`${c} · ${b}`,a)]),step('Calculem i comprovem les dues fraccions.',[`x = ${d} cm`,['break'],F(a,b),' = ',F(c,d)])],{kind:'length',unknown:'d',a,b,c,d,answer:d});
});
const contexts=[
 ['Al pont, tres travessers paral·lels tallen dos cables. Quant fa el tram x?',2,4,6],
 ['Al jardí de l’illa, tres tanques paral·leles tallen dos camins rectes. Quant fa x?',3,6,8],
 ['Tres barres paral·leles subjecten dues cordes. Quants metres de corda falten al tram x?',2,3,9],
 ['Tres línies paral·leles marquen dos senders rectes. Quina distància té el tram x?',4,8,6],
 ['Al viver, tres rengles paral·lels tallen dos tubs rectes. Quant fa el tram x del tub?',3,9,12],
 ['Tres guies paral·leles tallen els dos cables d’una passarel·la. Quant mesura x?',4,6,12]
];
contexts.forEach(([prompt,a,b,d],i)=>{
 const c=a*d/b;
 add('pont',i,prompt,{mode:'rails',a,b,c,d,unknown:'c',unit:'m',context:true},[c,c+1,c+2,c+3,c+4].map(v=>number(v,'m')),
 ['Ara x és a′: és el tram de la primera secant entre s i t.',`Escriu dues fraccions iguals: ${a} sobre ${b}, i x sobre ${d}. Multiplica ${a} · ${d} i divideix entre ${b}.`],
 [step('Els tres elements paral·lels tallen dues secants. Apliquem Tales.',[F(a,b),' = ',F('x',d)]),step('Multipliquem en creu i aïllem x.',[`${b} · x = ${a} · ${d}`,['break'],'x = ',F(`${a} · ${d}`,b)]),step('Calculem. Totes les dades són en metres.',[`x = ${c} m`,['break'],F(a,b),' = ',F(c,d)])],{kind:'length',unknown:'c',a,b,c,d,answer:c});
});
function shuffle(list,rng=Math.random){const result=list.slice();for(let i=result.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;}
function select(previous=[],rng=Math.random){return categories.map(category=>{let pool=bank.filter(q=>q.category===category&&!previous.includes(q.id));if(!pool.length)pool=bank.filter(q=>q.category===category);const q=pool[Math.floor(rng()*pool.length)];return {...q,choices:shuffle(q.choices,rng)};});}
function newState(questions){return {questions,index:0,correct:0,wrong:0,attempts:0,hints:0,selected:null,tried:[],resolved:false,results:[]};}
function submit(state,id){const q=state.questions[state.index];if(state.resolved||!q||state.attempts>state.hints||state.tried.includes(id)||!q.choices.some(c=>c.id===id))return 'ignored';state.attempts++;state.selected=id;state.tried.push(id);const good=id===q.correct;if(good||state.attempts===3){state.resolved=true;state[good?'correct':'wrong']++;state.results.push({question:q,good});return good?'correct':'wrong';}return 'retry';}
function useHint(state,n){if(state.resolved||n!==state.hints+1||state.attempts!==n||n>2)return false;state.hints=n;return true;}
const api={bank,categories,scenes,select,shuffle,newState,submit,useHint};if(typeof module!=='undefined'&&module.exports)module.exports=api;else window.TALES_ESCAPE_DATA=api;
})();
