/* Banc revisable: sis situacions de cadascuna de les cinc idees. */
(()=>{
'use strict';
const categories=['compara','amplia','redueix','completa','detecta'];
const scenes={
 compara:{title:'La platja de les formes',image:'platja',alt:'Platja amb plantes triangulars i roques geomètriques',goal:'Compara dues formes'},
 amplia:{title:'El bosc dels triangles',image:'bosc',alt:'Bosc amb arbres i fulles de formes triangulars',goal:'Amplia sense deformar'},
 redueix:{title:'El jardí de les mides',image:'jardi',alt:'Jardí de l’illa amb arbustos esfèrics i parterres rectangulars',goal:'Redueix sense deformar'},
 completa:{title:'El pont de les proporcions',image:'pont',alt:'Pont amb suports triangulars sobre l’aigua de l’illa',goal:'Troba una mesura que falta'},
 detecta:{title:'El far de la geometria',image:'far',alt:'Far amb una teulada geomètrica i una porta oberta',goal:'Detecta una deformació'}
};
const pair=(w,h)=>({w,h});
const dimensions=p=>`${p.w} cm de base i ${p.h} cm d’altura`;
const bank=[];
function add(category,i,shape,object,initial,final,choices,correct,prompt,hints,explanation){
 bank.push({id:`${category}-${i+1}`,category,shape,object,initial,final,choices,correct,prompt,hints,explanation});
}
const comparison=[
 [2,3,4,6,true,'triangle','dues fulles triangulars'],
 [3,4,6,12,false,'rectangle','dues plaques d’observació'],
 [2,4,6,12,true,'rectangle','dos cartells de la platja'],
 [3,5,6,15,false,'triangle','dos dibuixos d’una vela'],
 [2,5,4,10,true,'rectangle','dues fotografies de l’illa'],
 [4,6,8,18,false,'triangle','dos models d’una roca']
];
comparison.forEach(([w,h,W,H,yes,shape,object],i)=>{
 const fw=W/w,fh=H/h;
 const factorPairs=[[fw,fh],[fw,fh+1],[fw+1,fh],[fw+1,fh+1],[1,1]];
 const options=factorPairs.map(([baseFactor,heightFactor],j)=>({
  id:j===0?(yes?'si':'no'):`factors-${j}`,
  label:`${baseFactor===heightFactor?'Sí':'No'}. Base × ${baseFactor} i altura × ${heightFactor}.`,baseFactor,heightFactor
 }));
 add('compara',i,shape,object,pair(w,h),pair(W,H),options,yes?'si':'no',`Observa ${object}. Tenen la mateixa forma? Tria la resposta amb els factors correctes per a la base i l’altura.`,[
  'Mira una longitud cada vegada. Què has de fer per passar de la base inicial a la final?',
  `La base passa de ${w} a ${W}: multipliquem per ${fw}. Comprova si l’altura també es multiplica per ${fw}.`
 ],[`Base: ${W} ÷ ${w} = ${fw}.`,`Altura: ${H} ÷ ${h} = ${Number(fh.toFixed(2)).toLocaleString('ca-ES')}.`,yes?'El factor és el mateix. Les longituds són proporcionals i la forma es manté.':'Els factors són diferents. La figura s’ha deformat.']);
});
const enlargement=[
 [2,3,2,'triangle','una fulla del bosc'],[3,2,3,'rectangle','una placa de la Guspira'],
 [2,4,2,'rectangle','un cartell del camí'],[3,4,2,'triangle','el dibuix d’un arbre'],
 [4,2,2,'rectangle','una fotografia del bosc'],[2,2,3,'triangle','una peça triangular del refugi']
];
enlargement.forEach(([w,h,k,shape,object],i)=>{
 const final=pair(w*k,h*k);
 add('amplia',i,shape,object,pair(w,h),final,[
  {id:'correcta',label:dimensions(final),dimensions:final},
  {id:'nomes-base',label:dimensions(pair(w*k,h)),dimensions:pair(w*k,h)},
  {id:'suma',label:dimensions(pair(w+k,h+k)),dimensions:pair(w+k,h+k)},
  {id:'nomes-altura',label:dimensions(pair(w,h*k)),dimensions:pair(w,h*k)},
  {id:'sense-canvi',label:dimensions(pair(w,h)),dimensions:pair(w,h)}
 ],'correcta',`Volem ampliar ${object}. Multiplica totes les longituds per ${k}. Quines mesures tindrà?`,[
  `Ampliar per ${k} vol dir multiplicar cada longitud per ${k}. No hi sumem ${k}.`,
  `Comença per la base: ${w} × ${k} = ${w*k} cm. Ara aplica el mateix factor a l’altura.`
 ],[`Base final: ${w} × ${k} = ${w*k} cm.`,`Altura final: ${h} × ${k} = ${h*k} cm.`,`Totes dues longituds es multipliquen per ${k}. La forma es manté.`]);
});
const reduction=[
 [4,6,'triangle','una fulla per al quadern'],[6,8,'rectangle','el plànol d’un parterre'],
 [2,4,'rectangle','una etiqueta del jardí'],[4,8,'triangle','un dibuix d’una planta'],
 [6,10,'rectangle','una fotografia d’un arbust'],[8,12,'triangle','un model d’una teulada']
];
reduction.forEach(([w,h,shape,object],i)=>{
 const final=pair(w/2,h/2);
 add('redueix',i,shape,object,pair(w,h),final,[
  {id:'correcta',label:dimensions(final),dimensions:final},
  {id:'nomes-base',label:dimensions(pair(w/2,h)),dimensions:pair(w/2,h)},
  {id:'doble',label:dimensions(pair(w*2,h*2)),dimensions:pair(w*2,h*2)},
  {id:'nomes-altura',label:dimensions(pair(w,h/2)),dimensions:pair(w,h/2)},
  {id:'sense-canvi',label:dimensions(pair(w,h)),dimensions:pair(w,h)}
 ],'correcta',`Necessitem reduir ${object} a la meitat. Quines mesures tindrà sense canviar de forma?`,[
  'La meitat d’una longitud es troba dividint-la entre 2.',
  `La base serà ${w} ÷ 2 = ${w/2} cm. Divideix també l’altura entre 2.`
 ],[`Base final: ${w} ÷ 2 = ${w/2} cm.`,`Altura final: ${h} ÷ 2 = ${h/2} cm.`,`Dividim totes dues longituds entre 2. És el mateix que multiplicar-les per 0,5.`]);
});
const missing=[
 [2,3,6,'triangle','un suport triangular del pont'],[3,2,6,'rectangle','una placa del pont'],
 [2,4,4,'rectangle','un senyal del camí'],[4,3,8,'triangle','un dibuix d’un suport'],
 [3,4,9,'rectangle','un plànol de la passarel·la'],[4,2,12,'triangle','una peça de la maqueta']
];
missing.forEach(([w,h,W,shape,object],i)=>{
 const k=W/w,H=h*k;
 const existing=[H,h,h+W-w];
 const extra=[H-1,H+1,H+2,H-2,1,k].filter((n,i,all)=>n>0&&!existing.includes(n)&&all.indexOf(n)===i).slice(0,2);
 add('completa',i,shape,object,pair(w,h),pair(W,H),[
  {id:'correcta',label:`${H} cm`,value:H},
  {id:'sense-canvi',label:`${h} cm`,value:h},
  {id:'suma',label:`${h+W-w} cm`,value:h+W-w},
  ...extra.map((value,j)=>({id:`mesura-${j+1}`,label:`${value} cm`,value}))
 ],'correcta',`Ampliem ${object} sense deformar-lo. La base passa de ${w} cm a ${W} cm. Quant ha de fer l’altura final?`,[
  'Primer troba per quin nombre s’ha multiplicat la base.',
  `${W} ÷ ${w} = ${k}. Multiplica l’altura inicial per ${k}, el mateix factor.`
 ],[`Factor: ${W} ÷ ${w} = ${k}.`,`Altura final: ${h} × ${k} = ${H} cm.`,`Base i altura canvien pel mateix factor, ${k}.`]);
});
const deformation=[
 [2,3,4,9,'triangle','la fulla del far'],[3,2,9,4,'rectangle','el cartell del far'],
 [2,4,4,12,'rectangle','la fotografia de la costa'],[4,3,8,12,'triangle','la peça triangular de la teulada'],
 [3,4,6,12,'rectangle','el plànol de la porta'],[4,2,12,8,'triangle','el dibuix d’una bandera']
];
deformation.forEach(([w,h,W,H,shape,object],i)=>{
 const opts=[{id:'doble',label:dimensions(pair(w*2,h*2)),dimensions:pair(w*2,h*2)},
  {id:'deformada',label:dimensions(pair(W,H)),dimensions:pair(W,H)},
  {id:'triple',label:dimensions(pair(w*3,h*3)),dimensions:pair(w*3,h*3)},
  {id:'mateixa-mida',label:dimensions(pair(w,h)),dimensions:pair(w,h)},
  {id:'quadruple',label:dimensions(pair(w*4,h*4)),dimensions:pair(w*4,h*4)}];
 add('detecta',i,shape,object,pair(w,h),null,opts,'deformada',`La Guspira compara cinc versions de ${object}. Quina està deformada i cal corregir?`,[
  'Quatre versions conserven la forma. En una, la base i l’altura canvien de manera diferent.',
  `El doble seria ${w*2} cm de base i ${h*2} cm d’altura. El triple seria ${w*3} cm de base i ${h*3} cm d’altura. En les altres versions, comprova també que base i altura canviïn pel mateix factor.`
 ],[`A la versió deformada, la base passa de ${w} a ${W} cm i l’altura de ${h} a ${H} cm.`,`Base: factor ${W/w}. Altura: factor ${Number((H/h).toFixed(2)).toLocaleString('ca-ES')}.`,'Els factors són diferents. Per conservar la forma, cal aplicar el mateix factor a totes les longituds.']);
});
function shuffle(list,rng=Math.random){const a=list.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function select(previous=[],rng=Math.random){return shuffle(categories.map(category=>{
 const pool=bank.filter(q=>q.category===category&&!previous.includes(q.id));
 const q=pool[Math.floor(rng()*pool.length)];
 return {...q,choices:shuffle(q.choices,rng)};
}),rng);}
function newState(questions){return {questions,index:0,correct:0,wrong:0,attempts:0,hints:0,selected:null,tried:[],resolved:false,results:[]};}
function submit(state,id){
 const q=state.questions[state.index];
 if(state.resolved||!q||state.attempts>state.hints||state.tried.includes(id)||!q.choices.some(c=>c.id===id))return 'ignored';
 state.attempts++;state.selected=id;state.tried.push(id);
 const good=id===q.correct;
 if(good||state.attempts===3){state.resolved=true;state[good?'correct':'wrong']++;state.results.push({question:q,good});return good?'correct':'wrong';}
 return 'retry';
}
function useHint(state,number){
 if(state.resolved||number!==state.hints+1||state.attempts!==number||number>2)return false;
 state.hints=number;return true;
}
const api={bank,categories,scenes,select,shuffle,newState,submit,useHint,dimensions};
if(typeof module!=='undefined'&&module.exports)module.exports=api;
else window.ESCAPE_DATA=api;
})();
