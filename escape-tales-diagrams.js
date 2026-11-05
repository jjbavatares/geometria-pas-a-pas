/* Un esquema estable: a i a′ a dalt, b i b′ a baix, com als apunts. */
(()=>{
'use strict';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function math(x){if(typeof x==='string'||typeof x==='number')return esc(x);if(x[0]==='frac')return `<span class="frac"><span>${math(x[1])}</span><span>${math(x[2])}</span></span>`;if(x[0]==='break')return '<span class="math-break"></span>';return x.map(math).join('');}
function description(p){if(p.mode==='text')return p.text;if(p.mode==='number')return `${p.value} ${p.unit}`;if(p.mode==='proportion')return `${p.left[0]} partit per ${p.left[1]} és igual a ${p.right[0]} partit per ${p.right[1]}`;return 'Tres paral·leles tallen dues secants. a correspon a b, i a′ correspon a b′.';}
function rails(p){
 const offset=((p.variant||0)%3-1)*12;
 const top=x=>82+(x-65)*.08,bottom=x=>190+(x-65)*.24;
 const xs=[65,205+offset,420],names=['r','s','t'];
 const label=(x,y,t,color='#172a41',size=26)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="${color}" font-size="${size}">${esc(t)}</text>`;
 const between=(x1,x2,fn,key,value)=>{const x=(x1+x2)/2,y=fn(x)+(fn===top?-16:32),active=p.highlight===key;
  return `${active?`<path d="M${x1} ${fn(x1)}L${x2} ${fn(x2)}" stroke="#b74c00" stroke-width="9"/>`:''}${label(x,y,value,active?'#a13b00':'#172a41',active?28:26)}`;};
 let drawing=xs.map((x,i)=>`<path d="M${x} 45V320" stroke="#c46b12" stroke-width="4"/>${label(x,30,names[i],'#9b4d00')}`).join('');
 drawing+=`<path d="M22 ${top(22)}L473 ${top(473)} M22 ${bottom(22)}L473 ${bottom(473)}" stroke="#1759a8" stroke-width="4" fill="none"/>${label(480,top(473)+7,'u','#1759a8',20)}${label(480,bottom(473)+7,'v','#1759a8',20)}`;
 if(!p.labelsOnly){const vals={a:p.a,b:p.b,'a′':p.c,'b′':p.d},unknown=p.unknown==='c'?'a′':'b′';
  for(const [key,first,fn] of [['a',true,top],['a′',false,top],['b',true,bottom],['b′',false,bottom]]){
   const value=p.lettersOnly?key:key===unknown?'x = ?':`${key} = ${vals[key]} ${p.unit}`;
   drawing+=between(xs[first?0:1],xs[first?1:2],fn,key,value);
  }
 }
 const detail=p.labelsOnly?'r, s i t són les rectes taronges; u i v són les blaves.':p.lettersOnly?`Tram destacat: ${p.highlight}. a i b entre r i s; a′ i b′ entre s i t.`:`a = ${p.a} ${p.unit}; b = ${p.b} ${p.unit}; a′ = ${p.unknown==='c'?'x':p.c} ${p.unit}; b′ = ${p.unknown==='d'?'x':p.d} ${p.unit}.`;
 return `<div class="tales-drawing"><svg viewBox="0 0 510 335" role="img" aria-label="${esc(detail)}">${drawing}</svg><p class="tales-legend">${p.labelsOnly?'Rectes taronges: r, s i t · Rectes blaves: u i v':'r, s i t: <strong>paral·leles</strong> · u i v: secants'}</p>${p.labelsOnly?'':'<p class="tales-prime">a′ i b′ es llegeixen «a prima» i «b prima».</p>'}</div>`;
}
function rightTriangle(p){
 const labels=['a','b','c'].map(key=>p.unknown===key?`${key} = ?`:p.unit?`${key} = ${p[key]} ${p.unit}`:key);
 const detail=`Triangle rectangle amb l’angle de 90° entre b i c. ${labels.join('; ')}.`;
 const label=(x,y,t,color)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="${color}" font-size="25" font-weight="700">${esc(t)}</text>`;
 return `<div class="tales-drawing"><svg viewBox="0 0 410 275" role="img" aria-label="${esc(detail)}"><path d="M105 40V220H355Z" fill="#eaf2ff" stroke="#1759a8" stroke-width="4"/><path d="M105 199H126V220" fill="none" stroke="#bd5800" stroke-width="4"/>${label(255,105,labels[0],'#1759a8')}${label(49,138,labels[1],'#172a41')}${label(230,257,labels[2],'#172a41')}</svg></div>`;
}

function projection(p){
 const x=105+270*p.m/(p.m+p.n);
 const y=214-Math.sqrt((x-105)*(375-x));
 const label=key=>key===p.unknown?key+' = ?':p.shown.includes(key)?key+' = '+String(Math.round(p.values[key]*100)/100).replace('.',',')+' '+p.unit:key;
 const labels=[['b',(105+x)/2-34,(y+214)/2-14],['c',(375+x)/2+34,(y+214)/2-14],['h',x+37,172],['m',(105+x)/2,243],['n',(375+x)/2,243],['a',240,288]];
 const detail=labels.map(([key])=>label(key)).join('; ');
 const ux=(105-x)/Math.hypot(105-x,214-y),uy=(214-y)/Math.hypot(105-x,214-y);
 const marker='M'+(x+ux*12)+' '+(y+uy*12)+' l'+(uy*12)+' '+(-ux*12)+' l'+(-ux*12)+' '+(-uy*12);
 return '<div class="tales-drawing"><svg viewBox="0 0 480 305" role="img" aria-label="'+esc('Triangle rectangle. L’altura separa m i n. '+detail)+'"><path d="M105 214 L'+x+' '+y+' L375 214Z" fill="#eaf2ff" stroke="#1759a8" stroke-width="4"/><path d="M'+x+' '+y+'V214 M'+x+' 201h13v13" stroke="#ae5400" stroke-width="3" fill="none"/><path d="'+marker+'" stroke="#1759a8" stroke-width="2" fill="none"/><path d="M105 253v9h270v-9" stroke="#007763" stroke-width="2" fill="none"/>'+labels.map(([key,lx,ly])=>'<text x="'+lx+'" y="'+ly+'" text-anchor="middle" font-size="21" fill="'+(key===p.unknown?'#9c3c00':'#172a41')+'">'+esc(label(key))+'</text>').join('')+'</svg></div>';
}

function scaleModel(p){
 const label=(x,y,t)=>'<text x="'+x+'" y="'+y+'" text-anchor="middle" fill="#172a41" font-size="21">'+esc(t)+'</text>';
 function object(cx,size,color){
  const x=cx-size/2,y=190-size*.65;
  if(p.power===3){
   const depth=size*.22;
   return '<path d="M'+x+' '+y+'h'+size+'v'+size*.65+'h-'+size+'Z M'+x+' '+y+'l'+depth+' -'+depth+'h'+size+'l-'+depth+' '+depth+' M'+(x+size+depth)+' '+(y-depth)+'v'+size*.65+'l-'+depth+' '+depth+'" fill="'+color+'" stroke="#1759a8" stroke-width="3"/>';
  }
  return '<rect x="'+x+'" y="'+y+'" width="'+size+'" height="'+size*.65+'" fill="'+color+'" stroke="#1759a8" stroke-width="3"/>';
 }
 const factor=Math.max(1,p.scale),first=135/factor,second=first*p.scale;
 const value=n=>String(n).replace('.',',');
 const measure=(n)=>n==null?'':n==='?'?'? '+p.unit:value(n)+' '+p.unit;
 const detail='Model inicial: '+measure(p.before)+'. Model final: '+measure(p.after)+'. '+(p.k===null?'':'k = '+value(p.k)+'.');
 return '<div class="tales-drawing"><svg viewBox="0 0 470 270" role="img" aria-label="'+esc(detail)+'">'+(p.k===null?'':label(235,38,'k = '+value(p.k)))+object(115,first,'#dbeafe')+object(340,second,'#c9eee4')+label(115,220,'Model inicial')+label(340,220,'Model final')+label(115,250,measure(p.before))+label(340,250,measure(p.after))+'</svg></div>';
}
function figure(p){if(p.mode==='scale-model')return scaleModel(p);if(p.mode==='projection')return projection(p);if(p.mode==='right')return rightTriangle(p);if(p.mode==='rails')return rails(p);if(p.mode==='text')return `<span class="tales-option-text">${esc(p.text)}</span>`;if(p.mode==='number')return `<span class="tales-number">${esc(p.value)} <small>${esc(p.unit)}</small></span>`;if(p.mode==='proportion')return `<span class="tales-equation">${math([['frac',...p.left],' = ',['frac',...p.right]])}</span>`;return '';}
const api={figure,math,description};if(typeof module!=='undefined'&&module.exports)module.exports=api;else window.TALES_ESCAPE_DIAGRAMS=api;
})();
