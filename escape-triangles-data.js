/* Cinc panys del far: sis variants senzilles per pany. */
(()=>{
'use strict';
const categories=['homolegs','aa','ccc','cac','mesura'];
const scenes={homolegs:{title:'1. La brúixola dels angles'},aa:{title:'2. La porta AA'},ccc:{title:'3. El pany CCC'},cac:{title:'4. El pany CAC'},mesura:{title:'5. La llum del far'}};
const bank=[];
function add(category,i,prompt,model,figures,hints,explanation){bank.push({id:`${category}-${i+1}`,category,prompt,model,choices:figures.map((figure,j)=>({id:`p${j}`,label:`Peça ${j+1}`,figure})),correct:'p0',hints,explanation});}
[30,40,45,50,60,90].forEach((angle,i)=>{
 const values=[angle,angle+5,angle+10,angle+15,angle-5];
 add('homolegs',i,'Triangles semblants: quant fa A′?',{mode:'angle-model',angles:[angle,30]},values.map(value=>({mode:'number',value,unit:'°'})),
 ['A i A′ són angles corresponents.','En triangles semblants, els angles corresponents són iguals.'],
 [`A i A′ són homòlegs: ocupen la mateixa posició.`,`A′ = A = ${angle}°. La semblança conserva els angles.`]);
});
[[30,60],[40,60],[45,70],[50,65],[35,55],[60,60]].forEach(([a,b],i)=>{
 const pairs=[[a,b],[a+5,b],[a,b+5],[a+10,b+10],[a+15,b+5]];
 add('aa',i,'Tria dos angles iguals als del model.',{mode:'aa',angles:[a,b]},pairs.map(angles=>({mode:'aa',angles})),
 ['AA vol dir dos angles iguals. Compara les dues mesures. ',`Busca ${a}° i ${b}°. Han de coincidir tots dos.`],
 [`Coincideixen dos angles: ${a}° i ${b}°.`,`El criteri AA diu que els triangles són semblants. El tercer angle també coincideix.`]);
});
[[3,4,5],[2,3,4],[4,4,6],[3,3,3],[4,5,6],[2,2,3]].forEach((s,i)=>{
 const t=s.map(v=>v*2),sets=[t,[t[0],t[1],t[2]+1],[t[0],t[1]+1,t[2]],[t[0]+1,t[1],t[2]],t.map((v,j)=>v+j+1)];
 add('ccc',i,'Tria tres costats proporcionals al model.',{mode:'ccc',sides:s},sets.map(sides=>({mode:'ccc',sides})),
 ['CCC: els tres costats han de canviar pel mateix factor.',`El costat a passa de ${s[0]} a ${t[0]} cm: és el doble. Busca també el doble de b i de c.`],
 [`Els tres factors són iguals: ${t[0]} : ${s[0]} = ${t[1]} : ${s[1]} = ${t[2]} : ${s[2]} = 2.`,`Són semblants pel criteri CCC: tots els costats s’han duplicat.`]);
});
[[2,3,60],[3,4,90],[2,2,60],[3,5,45],[2,4,90],[4,5,60]].forEach(([b,c,a],i)=>{
 const sets=[[b*2,c*2,a],[b*2,c*2,a+15],[b*2,c*2+1,a],[b*2+1,c*2,a],[b*2+1,c*2+1,a+15]];
 add('cac',i,'Tria costats proporcionals i l’angle igual.',{mode:'cac',sides:[b,c],angle:a},sets.map(([B,C,angle])=>({mode:'cac',sides:[B,C],angle})),
 ['CAC: compara dos costats i l’angle que hi ha entre ells.',`Busca b = ${b*2} cm, c = ${c*2} cm i l’angle de ${a}°. Han de complir-se les tres dades.`],
 [`b i c es dupliquen: ${b*2} : ${b} = ${c*2} : ${c} = 2.`,`L’angle entre b i c continua sent ${a}°. Són semblants pel criteri CAC.`]);
});
[[2,3,2],[3,4,2],[2,4,2],[4,3,2],[3,5,3],[4,5,3]].forEach(([b,c,factor],i)=>{
 const answer=c*factor,values=[answer,c,answer+1,answer+2,answer-1];
 add('mesura',i,'Troba c′. Els triangles són semblants.',{mode:'missing',b,c,factor},values.map(value=>({mode:'number',value,unit:'cm'})),
 [`b passa de ${b} a ${b*factor} cm. Quin nombre multiplica b?`,`Multiplica també c = ${c} cm per ${factor}. Tots els costats canvien igual.`],
 [`El factor és ${b*factor} : ${b} = ${factor}.`,`c′ = ${c} · ${factor} = ${answer} cm. Els costats homòlegs són proporcionals.`]);
});
function shuffle(list,rng=Math.random){const result=list.slice();for(let i=result.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[result[i],result[j]]=[result[j],result[i]];}return result;}
function select(previous=[],rng=Math.random){return categories.map(category=>{let pool=bank.filter(q=>q.category===category&&!previous.includes(q.id));if(!pool.length)pool=bank.filter(q=>q.category===category);const q=pool[Math.floor(rng()*pool.length)];return {...q,choices:shuffle(q.choices,rng)};});}
function newState(questions){return {questions,index:0,correct:0,wrong:0,attempts:0,hints:0,selected:null,tried:[],resolved:false,results:[]};}
function submit(state,id){const q=state.questions[state.index];if(state.resolved||!q||state.attempts>state.hints||state.tried.includes(id)||!q.choices.some(c=>c.id===id))return 'ignored';state.attempts++;state.selected=id;state.tried.push(id);const good=id===q.correct;if(good||state.attempts===3){state.resolved=true;state[good?'correct':'wrong']++;state.results.push({question:q,good});return good?'correct':'wrong';}return 'retry';}
function useHint(state,n){if(state.resolved||n!==state.hints+1||state.attempts!==n||n>2)return false;state.hints=n;return true;}
const api={bank,categories,scenes,select,shuffle,newState,submit,useHint};if(typeof module!=='undefined'&&module.exports)module.exports=api;else window.TRIANGLES_ESCAPE_DATA=api;
})();
