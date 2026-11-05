
(()=>{
'use strict';
const slug=location.pathname.endsWith('escape-altura.html')?'altura':'catet';
const height=slug==='altura';
const title=height?'La torre de l’altura':'La passarel·la dels catets';
const topic=height?'Teorema de l’altura':'Teorema del catet';
const scenes={
 parts:{title:'1 · Reconeix les parts'},
 formula:{title:'2 · Tria la fórmula'},
 direct:{title:'3 · Aplica la fórmula'},
 inverse:{title:'4 · Troba un segment'},
 context:{title:'5 · Resol el repte final'}
};
const bank=[];
const letters=['a','b','c','h','m','n'];
const steps=(text,equation)=>({text,equation});
const fmt=n=>String(Math.round(n*100)/100).replace('.',',');
const frac=(n,d)=>['frac',n,d];
function add(category,prompt,model,options,hints,explanation){
 bank.push({id:slug+'-'+bank.length,category,prompt,model:{mode:'projection',...model},
  choices:options.map((value,i)=>({id:'p'+i,figure:typeof value==='number'?{mode:'number',value:fmt(value),unit:model.unit}:{mode:'text',text:value}})),
  correct:'p0',hints,explanation});
}
const names={
 a:'Quina lletra indica la hipotenusa sencera?', b:'Quin catet té la projecció m?', c:'Quin catet té la projecció n?',
 h:'Quina lletra indica l’altura sobre la hipotenusa?',m:'Quina és la projecció del catet b?',n:'Quina és la projecció del catet c?'
};
const meanings={a:'a va d’un extrem a l’altre de la hipotenusa.',b:'El catet b acaba a l’extrem esquerre, com m.',c:'El catet c acaba a l’extrem dret, com n.',h:'h surt de l’angle recte i arriba perpendicularment a la hipotenusa.',m:'m és el segment de l’esquerra, al costat del catet b.',n:'n és el segment de la dreta, al costat del catet c.'};
const formulaFor={h:'h² = m · n',b:'b² = a · m',c:'c² = a · n',m:'m = b² : a',n:'n = c² : a',a:'a = m + n'};
const heightPairs=[[1,4],[2,8],[3,12],[4,9],[4,16],[8,18]];
const catetPairs=[[9,16],[16,9],[36,64],[64,36],[6.4,3.6],[3.6,6.4]];
const pairs=height?heightPairs:catetPairs;
function options(answer){
 return [...new Set([answer,answer+1,answer+2,answer+3,answer+4])];
}
const recognition=height?['h','m','n','a','b','c']:['m','n','b','c','a','h'];
const formulaPrompts=height?[
 'Quina igualtat relaciona el quadrat de l’altura amb m i n?',
 'Quina operació ens dona la hipotenusa sencera a partir dels seus trams?',
 'Si coneixes h i n, com pots trobar m?',
 'Si coneixes h i m, com pots trobar n?',
 'Quina fórmula dona l’altura h directament?',
 'Si coneixes a i n, com pots trobar m?'
]:[
 'Quina fórmula relaciona el catet b amb la seva projecció?',
 'Quina fórmula relaciona el catet c amb la seva projecció?',
 'Si coneixes el catet b i la hipotenusa, com pots trobar m?',
 'Si coneixes el catet c i la hipotenusa, com pots trobar n?',
 'Quina fórmula dona el catet b directament?',
 'Quina fórmula dona el catet c directament?'
];
const formulaAnswers=height?['h² = m · n','a = m + n','m = h² : n','n = h² : m','h = √(m · n)','m = a − n']:
 ['b² = a · m','c² = a · n','m = b² : a','n = c² : a','b = √(a · m)','c = √(a · n)'];
pairs.forEach(([m,n],i)=>{
 const a=m+n,h=Math.sqrt(m*n),b=Math.sqrt(a*m),c=Math.sqrt(a*n);
 const data={a,b,c,h,m,n};
 const base={m,n,shown:[],unit:''};
 const part=recognition[i];
 add('parts',names[part],base,[part,...letters.filter(x=>x!==part).slice(0,4)],
  ['Busca la lletra al dibuix.',meanings[part]],
  [steps('Mira l’altura i els dos trams de la hipotenusa.'),steps(meanings[part])]);
 const answer=formulaAnswers[i];
 const key=answer[0];
 const distractors=[key+' = m · n',key+' = a · h',key+' = b + c',key+' = m − n',key+' = a + h'];
 add('formula',formulaPrompts[i],base,[answer,...distractors.filter(x=>x!==answer).slice(0,4)],
  [height?'Parteix de h² = m · n i a = m + n.':'Cada catet va amb la seva projecció: b amb m, c amb n.',
   i>=4?(height?'Fixa’t si et demanen una arrel o un segment.':'Per obtenir el catet, cal fer l’arrel del producte.'):'Fixa’t en quina lletra has de deixar sola.'],
  [steps('Identifica la dada que et demanen.'),steps('Escriu la relació que permet trobar-la.',answer)]);

 const leg=i%2?'c':'b', projection=leg==='b'?'m':'n';
 const x=height?'h':leg;
 const direct=height?['m','n']:['a',projection];
 const square=height?m*n:a*data[projection];
 const equation=height?formulaFor.h:formulaFor[leg];
 const model=(shown,unknown,unit='cm')=>({...base,values:data,shown,unknown,unit});
 const number=(key)=>fmt(data[key]);
 add('direct','Quant mesura '+x+'?',model(direct,x),options(data[x]),
  ['Localitza les dues dades al dibuix.', 'Multiplica '+number(direct[0])+' · '+number(direct[1])+' i fes l’arrel.'],
  [steps('Escrivim el teorema.',equation),steps('Multipliquem les dades.',x+'² = '+number(direct[0])+' · '+number(direct[1])+' = '+fmt(square)),
   steps('Fem l’arrel quadrada.',x+' = √'+fmt(square)+' = '+number(x)+' cm')]);
 const missing=height?(i%2?'n':'m'):projection;
 const known=height?(missing==='m'?'n':'m'):'a';
 const numerator=height?'h':leg;
 add('inverse','Quina longitud té el segment '+missing+'?',model([numerator,known],missing),options(data[missing]),
  ['Comença amb '+equation+'.','Eleva '+number(numerator)+' al quadrat i divideix entre '+number(known)+'.'],
  [steps('Escrivim el teorema.',equation),
   steps('Deixem sol el segment que busquem.',[missing+' = ',frac(numerator+'²',known)]),
   steps('Substituïm i dividim.',[missing+' = ',frac(number(numerator)+'²',number(known)),' = '+number(missing)+' cm'])]);

 const shown=height?['a','m']:['m','n'];
 const settings=height?['Al mirador','A la torre','A la cabana','A l’observatori','A la caseta del far','Al refugi']:
  ['Al port','Al viver','Al pont','Al refugi','Al jardí','A la passarel·la'];
 const prompt=height?settings[i]+', un tirant h va de l’angle recte a la biga a. Quants metres fa?':
  settings[i]+', una estructura triangular té dos trams m i n a la hipotenusa. Quants metres fa la barra '+leg+'?';
 const intermediate=height?'n':'a';
 add('context',prompt,model(shown,x,'m'),options(data[x]),
  [height?'Troba primer el tram n restant m de la hipotenusa.':'Suma m i n per trobar la hipotenusa sencera.',
   'Ara aplica '+equation+' i fes l’arrel quadrada.'],
  [steps('Calculem '+intermediate+' amb la relació a = m + n.',height?'n = '+number('a')+' − '+number('m')+' = '+number('n')+' m':'a = '+number('m')+' + '+number('n')+' = '+number('a')+' m'),
   steps('Apliquem el teorema.',[equation,'; '+x+'² = '+number(direct[0])+' · '+number(direct[1])+' = '+fmt(square)]),
   steps('Fem l’arrel i escrivim la unitat.',x+' = √'+fmt(square)+' = '+number(x)+' m')]);
});
const data=window.TALES_ESCAPE_DATA.createGame(bank,scenes,2);
window.PICTURE_ESCAPE_THEME={
 data,topic:topic.toUpperCase(),title,total:10,target:8,historyLimit:30,
 mission:height?'Ajuda la Guspira a reforçar la torre amb deu proves.':'Ajuda la Guspira a completar la passarel·la amb deu proves.',
 coach:height?'L’altura divideix la hipotenusa en dos trams. <strong>h² = m · n</strong>.':'Cada catet va amb la seva projecció. <strong>b² = a · m</strong> i <strong>c² = a · n</strong>.',
 image:height?'escape-far.png':'escape-pont.png',alt:height?'Una torre de còmic vora el mar':'Una passarel·la de còmic a l’illa',
 victory:'VICTÒRIA · MISSIÓ COMPLETADA',success:'Has acabat les deu proves del '+topic.toLowerCase()+'.',
 retry:'Repassa les dades del triangle i torna-ho a provar.',
 reminder:height?'Multiplica els dos trams de la hipotenusa.':'Relaciona cada catet amb la seva projecció.',
 storage:'geometria-'+slug+'-escape-previous',
 story:['Identifica les lletres.','Relaciona cada lletra amb el seu tram.','Tria la relació correcta.','Decideix quina operació faràs.','Utilitza les dades del dibuix.','Troba la longitud amb la fórmula.','Ara el segment és la incògnita.','Aïlla el segment i calcula’l.','Busca primer la dada que falta.','Combina dues operacions per acabar.']
};
})();
