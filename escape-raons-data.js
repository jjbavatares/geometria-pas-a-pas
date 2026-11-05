(()=>{
'use strict';
const slug=location.pathname.split('/').pop().replace(/^escape-|\.html$/g,'');
const games={
 longitud:{title:'El taller de les maquetes',topic:'Raó de semblança de longitud',measure:'longitud',unit:'cm',power:1,art:'escape-bosc.png',places:['una maqueta','un plànol','un cartell','una fotografia','un mapa','un dibuix']},
 area:{title:'El jardí dels mosaics',topic:'Raó de semblança d’àrea',measure:'àrea',unit:'cm²',power:2,art:'escape-jardi.png',places:['un mosaic','una rajola','un cartell','una bandera','una plantilla','una fotografia']},
 volum:{title:'El magatzem de les caixes',topic:'Raó de semblança de volum',measure:'volum',unit:'cm³',power:3,art:'escape-temple.png',places:['una capsa','un recipient','un motlle','un bloc','un embalatge','un cofre']}
};
const game=games[slug], {measure,unit,power}=game;
const symbol=['','k','k²','k³'][power];
const initial=measure+' inicial', final=measure+' final';
const number=(value)=>String(value).replace('.',',');
const step=(text,equation)=>({text,equation});
const frac=(n,d)=>['frac',n,d];
const bank=[];
const scenes={
 factor:{title:'1 · Interpreta la raó'},
 direct:{title:'2 · Troba la mesura final'},
 initial:{title:'3 · Recupera la mesura inicial'},
 inverse:{title:'4 · Descobreix la raó'},
 challenge:{title:'5 · Aplica-ho en context'}
};
function add(category,i,prompt,k,before,after,answer,answerUnit,hints,explanation){
 const values=answer<1?[answer,0.25,0.5,0.75,1,2]:[answer,answer+1,answer+2,answer*2,answer+3,answer+4];
 bank.push({id:slug+'-'+category+'-'+i,category,prompt,
  model:{mode:'scale-model',power,k,before,after,unit,measure,scale:ks[i]},
  choices:[...new Set(values)].slice(0,5).map((value,j)=>({id:'p'+j,figure:{mode:'number',value:number(value),unit:answerUnit}})),
  correct:'p0',hints,explanation});
}
const ks=[2,3,0.5,4,1,0.25];
const bases=[8,4,16,3,6,64];
for(const [i,k] of ks.entries()){
 const b=bases[i], f=k**power, a=b*f;
 const factorFormula=power===1?'factor de longitud = k':'factor de '+measure+' = '+symbol;
 const expanded=Array(power).fill(number(k)).join(' · ');
 const factorCalc=symbol+' = '+expanded+(power===1?'':' = '+number(f));
 const reason=power===1?'La longitud canvia amb la mateixa raó k.':power===2?'L’àrea canvia amb el quadrat de k.':'El volum canvia amb el cub de k.';
 const direction=k===1?'Amb k = 1 es conserva la mida.':k<1?'En reduir, el factor és més petit que 1.':'En ampliar, el factor és més gran que 1.';
 add('factor',i,'Si k = '+number(k)+', quin factor s’aplica a la mesura indicada?',k,null,null,f,'',
  [reason,power===1?direction:'Calcula '+expanded+'.'],[step(reason,factorFormula),step(direction,factorCalc)]);
 add('direct',i,'Calcula la mesura final indicada al dibuix.',k,b,'?',a,unit,
  [reason,'Multiplica '+number(b)+' per '+number(f)+'.'],
  [step('Calculem el factor de la mesura.',factorCalc),step('Multipliquem la mesura inicial pel factor.',final+' = '+number(b)+' · '+number(f)+' = '+number(a)+' '+unit)]);
 add('initial',i,'Calcula la mesura inicial indicada al dibuix.',k,'?',a,b,unit,
  [reason,'Divideix '+number(a)+' entre '+number(f)+'.'],
  [step('Calculem el factor de la mesura.',factorCalc),step('Desfem la multiplicació dividint pel factor.',[initial+' = ',frac(number(a),number(f)),' = '+number(b)+' '+unit])]);
 const inverse=power===1?'El quocient ja és k.':power===2?'Fes l’arrel quadrada del quocient.':'Fes l’arrel cúbica del quocient.';
 const root=power===1?'':power===2?'√':'∛';
 add('inverse',i,'Quina és la raó de longitud k entre els dos models?',null,b,a,k,'',
  ['Divideix la mesura final entre la inicial.',inverse],
  [step('Comparem la mesura final amb la inicial.',[symbol+' = ',frac(number(a),number(b)),' = '+number(f)]),
   step(inverse,'k = '+root+number(f)+(root?' = '+number(k):''))]);
 const originalSide=i%2?8:4, finalSide=originalSide*k;
 add('challenge',i,'Fem una còpia semblant. L’objecte és '+game.places[i]+'. Un costat passa de '+originalSide+' cm a '+finalSide+' cm. '+(power===1?'Quant mesura l’altre costat indicat al dibuix?':'Quina és la mesura final indicada al dibuix?'),null,b,'?',a,unit,
  ['Troba k dividint la longitud final entre la inicial.',reason+' Després multiplica la mesura inicial pel factor.'],
  [step('Trobem k amb els costats corresponents.',['k = ',frac(String(finalSide),String(originalSide)),' = '+number(k)]),
   step('Calculem el factor de la mesura.',factorCalc),step('Calculem la mesura final.',final+' = '+number(b)+' · '+number(f)+' = '+number(a)+' '+unit)]);
}
window.PICTURE_ESCAPE_THEME={
 ...game,topic:game.topic.toUpperCase(),total:10,target:8,historyLimit:30,
 data:window.TALES_ESCAPE_DATA.createGame(bank,scenes,2),
 mission:'Ajuda la Guspira a completar deu encàrrecs a l’illa.',
 coach:'Anomenem <strong>k</strong> la raó de longitud entre els dos models. El factor per a la mesura d’aquest joc és <strong>'+symbol+'</strong>.',
 image:game.art,alt:'Un racó de l’illa de la geometria en estil còmic',
 victory:'VICTÒRIA · MISSIÓ COMPLETADA',success:'Has completat les deu proves.',
 retry:'Repassa la relació entre k i la mesura. Després, torna-ho a provar.',
 reminder:'Per comparar dues mesures homòlogues, mantenim l’ordre final : inicial.',
 storage:'geometria-raons-'+slug+'-escape',
 story:['Identifica el factor.','Compara ampliacions i reduccions.','Comença amb la mesura inicial.','Aplica el factor.','Ara la incògnita és la mesura inicial.','Desfés el canvi de mida.','Compara les mesures corresponents.','Recupera la raó de longitud.','Aplica el que has practicat.','Combina dues operacions.']
};
})();
