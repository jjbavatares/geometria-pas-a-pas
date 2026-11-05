(()=>{
'use strict';
const scenes={
  costats:{title:'El mapa del bosc',story:'Identifica els costats per orientar la Guspira.'},
  formula:{title:'El cadenat del sender',story:'Tria la fórmula que obre el cadenat.'},
  hipotenusa:{title:'La drecera',story:'Calcula la diagonal per escurçar el camí.'},
  catet:{title:'El mirador',story:'Troba l’altura que falta per arribar al mirador.'},
  repte:{title:'L’últim tram',story:'Calcula la longitud que et falta per completar el recorregut.'}
};
const bank=[];
const text=value=>({mode:'text',text:value});
const number=(value,unit)=>({mode:'number',value,unit});
function add(category,i,prompt,model,options,hints,steps){
  bank.push({
    id:`pitagores-${category}-${i+1}`,category,prompt,model,
    choices:options.map((figure,j)=>({id:`p${j}`,figure})),correct:'p0',
    hints,explanation:steps.map(([text,equation])=>({text,equation}))
  });
}
const triples=[[3,4,5],[6,8,10],[5,12,13],[8,15,17],[9,12,15],[12,16,20]];
const sides=[
  ['Quin costat és la hipotenusa?','a','Busca el costat que queda davant del quadrat taronja.','El costat a és davant de l’angle recte.'],
  ['Quins costats són els catets?','b i c','Busca els dos costats que es troben al quadrat taronja.','Els costats b i c formen l’angle recte.'],
  ['Quin costat no toca l’angle recte?','a','Segueix els costats que surten del quadrat taronja. El que queda és el que busques.','El costat a queda davant de l’angle recte.'],
  ['Quins dos costats formen l’angle de 90°?','b i c','El quadrat taronja marca el punt on es troben els dos costats.','Els catets b i c es troben a l’angle de 90°.'],
  ['Quina lletra indica el costat més llarg?','a','La hipotenusa és el costat inclinat, davant de l’angle recte.','El costat a és la hipotenusa i és el més llarg.'],
  ['Quina parella de costats toca l’angle recte?','b i c','Mira els dos costats que surten del quadrat taronja.','Els catets b i c toquen l’angle recte.']
];
sides.forEach(([prompt,answer,hint,reason],i)=>{
  const options=answer==='a'?['a','b','c','b i c','a i b']:['b i c','a i b','a i c','només a','només b'];
  add('costats',i,prompt,{mode:'right'},options.map(text),['El quadrat taronja marca l’angle de 90°.',hint],
    [['Localitzem l’angle recte al vèrtex inferior esquerre.'],[reason]]);
});
triples.forEach(([b,c,a],i)=>{
  const unknown=['a','b','c','a','b','c'][i], model={mode:'right',a,b,c,unknown,unit:'cm'};
  const sum=unknown==='a', other=unknown==='b'?'c':'b';
  const expression=sum?'b² + c²':`a² − ${other}²`;
  const wrongExpression=sum?'b² − c²':`a² + ${other}²`;
  add('formula',i,`Quina fórmula ens permet trobar ${unknown}?`,model,
    [`${unknown} = √(${expression})`,`${unknown} = √(${wrongExpression})`,`${unknown} = ${expression}`,`${unknown} = √(${sum?'b + c':`a − ${other}`})`,`${unknown} = ${sum?'b · c':`a · ${other}`}`].map(text),
    ['a és la hipotenusa. b i c són els catets.',sum?'Per trobar la hipotenusa, suma els quadrats dels catets i fes l’arrel.':'Per trobar un catet, resta el quadrat del catet conegut del quadrat de la hipotenusa i fes l’arrel.'],
    [['Partim del teorema de Pitàgores.','a² = b² + c²'],[sum?'Fem l’arrel de la suma.':'Aïllem el quadrat del catet i fem l’arrel.',`${unknown} = √(${expression})`]]);
});
function length(category,i,[b,c,a],unknown,unit,prompt){
  const values={a,b,c}, result=values[unknown];
  const sum=unknown==='a', other=unknown==='b'?'c':'b';
  const [left,right]=sum?[b,c]:[a,values[other]];
  const sign=sum?'+':'−', square=sum?left**2+right**2:left**2-right**2;
  const options=[...new Set([result,result+1,result-1,left+right,result+2,result+3])].slice(0,5);
  add(category,i,prompt,{mode:'right',a,b,c,unknown,unit},options.map(value=>number(value,unit)),
    [sum?'Busques la hipotenusa a. Suma els quadrats dels dos catets.':'Busques un catet. Resta el quadrat del catet conegut del quadrat de la hipotenusa.',
    `Calcula ${left} · ${left} ${sign} ${right} · ${right}. Després fes l’arrel quadrada del resultat.`],
    [[sum?'Escrivim la fórmula de la hipotenusa.':'Escrivim la fórmula del catet que falta.',`${unknown} = √(${sum?'b² + c²':`a² − ${other}²`})`],
    ['Substituïm les dades i calculem els quadrats.',`${unknown} = √(${left}² ${sign} ${right}²) = √(${left**2} ${sign} ${right**2})`],
    ['Fem l’arrel quadrada i escrivim la unitat.',`${unknown} = √${square} = ${result} ${unit}`]]);
}
const contexts=[
  ['Vols travessar una clariana rectangular en diagonal. Quant mesura la drecera?','a'],
  ['Una escala arriba a un mirador. A quina altura arriba (b)?','b'],
  ['Un cable lliga el capdamunt d’un pal amb el terra. Quina longitud té el cable (a)?','a'],
  ['Una escala es recolza en una paret. A quina distància de la paret és el peu de l’escala (c)?','c'],
  ['Una rampa puja fins a una plataforma. Quina longitud té la rampa (a)?','a'],
  ['Una corda lliga el capdamunt d’un pal amb el terra. A quina altura està lligada (b)?','b']
];
triples.forEach((triple,i)=>{
  length('hipotenusa',i,triple,'a','cm','Quant mesura la hipotenusa a?');
  const catet=i%2===0?'b':'c';
  length('catet',i,triple,catet,'cm',`Quant mesura el catet ${catet}?`);
  const [prompt,unknown]=contexts[i];
  length('repte',i,triple,unknown,'m',prompt);
});
window.PITAGORES_ESCAPE_DATA=window.TALES_ESCAPE_DATA.createGame(bank,scenes,2);
window.PICTURE_ESCAPE_THEME={
  data:window.PITAGORES_ESCAPE_DATA,
  topic:'TEOREMA DE PITÀGORES',
  title:'El mirador de Pitàgores',
  mission:'Ajuda la Guspira a seguir deu pistes pel bosc fins al mirador.',
  coach:'En un triangle rectangle, <strong>a</strong> és la hipotenusa i <strong>b i c</strong> són els catets.<span class="tales-intro-formula">a² = b² + c²</span>',
  image:'escape-bosc.png',alt:'Un bosc de còmic a l’illa de la geometria',
  victory:'VICTÒRIA · HAS ARRIBAT AL MIRADOR',
  success:'Has completat les deu proves del teorema de Pitàgores.',
  retry:'Repassa quan has de sumar o restar els quadrats i torna-ho a provar.',
  reminder:'La hipotenusa queda davant de l’angle recte.',
  total:10,
  target:8,
  storage:'geometria-pitagores-escape-previous',
  story:Object.values(scenes).flatMap(scene=>[scene.story,scene.story])
};
})();
