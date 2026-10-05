/* Trenta proves visuals: una pregunta i cinc peces, sense càlculs. */
(()=>{
'use strict';
const categories=['classifica','forma','girs','amplia','cossos'];
const scenes={
 classifica:{title:'1. El portal',goal:'Figura o cos?',image:'platja',alt:'El portal de la platja'},
 forma:{title:'2. Els miralls',goal:'La mateixa forma',image:'bosc',alt:'La galeria del bosc'},
 girs:{title:'3. Les peces girades',goal:'Girar no deforma',image:'jardi',alt:'El taller del jardí'},
 amplia:{title:'4. El pont',goal:'Ampliar sense deformar',image:'pont',alt:'El pont del temple'},
 cossos:{title:'5. El tresor',goal:'Cossos semblants',image:'far',alt:'La cambra del tresor'}
};
const bank=[],planar=['quadrat','rectangle','cercle','triangle','pentagon'],solids=['cub','esfera','cilindre','piramide','prisma'];
const names={quadrat:'quadrat',rectangle:'rectangle',cercle:'cercle',triangle:'triangle',pentagon:'pentàgon',cub:'cub',esfera:'esfera',cilindre:'cilindre',piramide:'piràmide',prisma:'prisma rectangular'};
const dims={quadrat:[2,2],rectangle:[4,2],triangle:[3,4],cercle:[2],pentagon:[2],cub:[2,2,2],esfera:[2],cilindre:[2,3],piramide:[2,3,2],prisma:[4,2,2]};
const shape=(kind,dimensions=dims[kind],rotation=0)=>({kind,dimensions,rotation,label:''});
const choices=figures=>figures.map((figure,i)=>({id:`p${i}`,label:`Peça ${i+1}`,figure}));
function add(category,i,prompt,figures,model,hints,explanation,facts={}){
 bank.push({id:`${category}-${i+1}`,category,prompt,choices:choices(figures),correct:'p0',model,panels:model?[model]:[],hints,explanation,...facts});
}
// Una sola opció pertany al grup demanat.
const sets=[['quadrat','cub','esfera','cilindre','piramide'],['rectangle','cub','esfera','piramide','prisma'],['cercle','cub','cilindre','piramide','prisma'],['triangle','cub','esfera','cilindre','prisma'],['cub','quadrat','rectangle','cercle','triangle'],['esfera','quadrat','rectangle','triangle','pentagon']];
sets.forEach((kinds,i)=>{
 const solid=i>=4;
 add('classifica',i,solid?'Tria un cos.':'Tria una figura plana.',kinds.map(k=>shape(k)),null,
 [solid?'Un cos té volum. Ocupa espai.':'Una figura plana és plana, com un dibuix en un full.',solid?'Busca la peça que mostra volum, no només una superfície plana.':'Busca una forma plana. Les altres peces mostren volum.'],
 [solid?`És ${names[kinds[0]]==='cub'?'un cub':'una esfera'}: té volum.`:`És ${names[kinds[0]]==='quadrat'?'un quadrat':names[kinds[0]]==='rectangle'?'un rectangle':names[kinds[0]]==='cercle'?'un cercle':'un triangle'}: és una figura plana.`,solid?'Les altres quatre opcions són figures planes.':'Les altres quatre opcions són cossos.'],{classification:solid?'solid':'plane'});
});
// Mantenim una única forma corresponent; la mida varia.
const flatModels=['quadrat','cercle','triangle','rectangle','pentagon','rectangle'];
flatModels.forEach((kind,i)=>{
 const model=shape(kind,i===5?[2,4]:dims[kind]);
 const correct=shape(kind,model.dimensions.map(v=>v*1.5));
 const others=planar.filter(k=>k!==kind).map(k=>shape(k));
 add('forma',i,'Tria la mateixa forma que el model.',[correct,...others],model,
 ['Mira la forma. No cal que tingui la mateixa mida.','Compara el contorn: els costats, els angles o la corba.'],
 ['La peça triada té la mateixa forma que el model.','Ha canviat la mida, però no s’ha deformat. Són semblants.']);
});
// Un gir de 90° és visualment senzill. No es demanen angles ni mesures.
[['rectangle',[4,2]],['triangle',[3,4]],['rectangle',[2,4]],['triangle',[4,3]],['rectangle',[4,1]],['triangle',[2,4]]].forEach(([kind,d],i)=>{
 const model=shape(kind,d),correct=shape(kind,d.map(v=>v*1.2),90);
 const others=planar.filter(k=>k!==kind).map(k=>shape(k));
 add('girs',i,'Tria la mateixa forma, encara que estigui girada.',[correct,...others],model,
 ['Imagina que gires el model. Continua sent la mateixa peça.','Busca el mateix contorn, amb les mateixes proporcions. Girar no és estirar.'],
 ['La peça correcta és una còpia girada del model.','Un gir canvia l’orientació. La forma es conserva: són semblants.']);
});
// Totes les peces són rectangles: només una conserva la proporció.
[[4,2],[3,2],[2,4],[4,1],[1,4],[4,3]].forEach((d,i)=>{
 const figures=[shape('rectangle',d.map(v=>v*1.5)),shape('rectangle',[5,5]),shape('rectangle',[8,1]),shape('rectangle',[1,8]),shape('rectangle',i===0?[3,4]:[4,2])];
 add('amplia',i,'Tria una còpia més gran sense deformar-la.',figures,shape('rectangle',d),
 ['La còpia ha de créixer tant d’amplada com d’altura.','Mira si és igual de llarg i ample en proporció. Descarta les peces massa estirades.'],
 ['La peça correcta és més gran i conserva el contorn del model.','L’amplada i l’altura han crescut pel mateix factor. Per això són semblants.']);
});
[['cub',[2,2,2]],['esfera',[2]],['prisma',[4,2,2]],['cilindre',[2,3]],['piramide',[3,4,2]],['prisma',[2,4,2]]].forEach(([kind,d],i)=>{
 const otherKinds=solids.filter(k=>k!==kind);
 const correct=shape(kind,d.map(v=>v*1.5));
 add('cossos',i,'Tria el cos amb la mateixa forma que el model.',[correct,...otherKinds.map(k=>shape(k))],shape(kind,d),
 ['Un cos pot ser més gran i conservar la forma.','Compara la forma de tot el cos, també la fondària. El color no importa.'],
 ['El cos triat conserva la forma del model.','Ha canviat la mida de tot el cos sense deformar-lo. Són semblants.']);
});
function shuffle(list,rng=Math.random){const result=list.slice();for(let i=result.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;}
function select(previous=[],rng=Math.random){return categories.map(category=>{let pool=bank.filter(q=>q.category===category&&!previous.includes(q.id));if(!pool.length)pool=bank.filter(q=>q.category===category);const q=pool[Math.floor(rng()*pool.length)];return {...q,choices:shuffle(q.choices,rng)};});}
function newState(questions){return {questions,index:0,correct:0,wrong:0,attempts:0,hints:0,selected:null,tried:[],resolved:false,results:[]};}
function submit(state,id){const q=state.questions[state.index];if(state.resolved||!q||state.attempts>state.hints||state.tried.includes(id)||!q.choices.some(c=>c.id===id))return 'ignored';state.attempts++;state.selected=id;state.tried.push(id);const good=id===q.correct;if(good||state.attempts===3){state.resolved=true;state[good?'correct':'wrong']++;state.results.push({question:q,good});return good?'correct':'wrong';}return 'retry';}
function useHint(state,n){if(state.resolved||n!==state.hints+1||state.attempts!==n||n>2)return false;state.hints=n;return true;}
const api={bank,categories,scenes,select,shuffle,newState,submit,useHint,planar,solids};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else window.SEMBLANCA_ESCAPE_DATA=api;
})();
