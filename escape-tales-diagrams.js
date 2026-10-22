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
function figure(p){if(p.mode==='rails')return rails(p);if(p.mode==='text')return `<span class="tales-option-text">${esc(p.text)}</span>`;if(p.mode==='number')return `<span class="tales-number">${esc(p.value)} <small>${esc(p.unit)}</small></span>`;if(p.mode==='proportion')return `<span class="tales-equation">${math([['frac',...p.left],' = ',['frac',...p.right]])}</span>`;return '';}
const api={figure,math,description};if(typeof module!=='undefined'&&module.exports)module.exports=api;else window.TALES_ESCAPE_DIAGRAMS=api;
})();
