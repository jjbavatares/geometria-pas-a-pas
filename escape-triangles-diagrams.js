/* Geometria calculada a partir dels angles o de les longituds donades. */
(()=>{
'use strict';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function vertices(p){
 if(p.mode==='ccc'){
  const [a,b,c]=p.sides,x=(b*b+c*c-a*a)/(2*b),y=Math.sqrt(Math.max(0,c*c-x*x));return [[0,0],[b,0],[x,y]];
 }
 if(p.mode==='cac'){const [b,c]=p.sides,r=p.angle*Math.PI/180;return [[0,0],[b,0],[c*Math.cos(r),c*Math.sin(r)]];}
 const [A,B]=p.angles||[40,60],r=A*Math.PI/180,s=B*Math.PI/180,length=Math.sin(s)/Math.sin(Math.PI-r-s);return [[0,0],[1,0],[length*Math.cos(r),length*Math.sin(r)]];
}
function triangle(p){
 const v=vertices(p),xs=v.map(x=>x[0]),ys=v.map(x=>x[1]),min=Math.min(...xs),w=Math.max(...xs)-min,h=Math.max(...ys),scale=Math.min(150/w,95/h);
 const points=v.map(([x,y])=>[30+(150-w*scale)/2+(x-min)*scale,120-y*scale]);
 const [A,B,C]=points,path=points.map(pt=>pt.join(' ')).join(' '),prime=/Opció/.test(p.label||'')?'′':'';
 const at=(pt,label,color)=>`<text x="${pt[0]}" y="${pt[1]+17}" fill="${color}" font-size="17" text-anchor="middle">${label}</text>`;
 const midpoint=(u,v,dx=0,dy=0)=>[(u[0]+v[0])/2+dx,(u[1]+v[1])/2+dy];
 const labels=['ccc','cac'].includes(p.mode)?at(midpoint(A,B),`b${prime}`,'#1749b0')+at(midpoint(A,C,-12,-17),`c${prime}`,'#9b2768')+(p.mode==='ccc'?at(midpoint(B,C,10,-17),`a${prime}`,'#9a5400'):at(A,`A${prime}`,'#007763')):at(A,`A${prime}`,'#9b2768')+at(B,`B${prime}`,'#1749b0');
 const len=Math.hypot(C[0]-A[0],C[1]-A[1]),r=13,end=[A[0]+r*(C[0]-A[0])/len,A[1]+r*(C[1]-A[1])/len];
 const arc=p.mode==='cac'?`<path d="M${A[0]+r} ${A[1]} A${r} ${r} 0 0 0 ${end}" fill="none" stroke="#007763" stroke-width="3"/>`:'';
 return `<svg viewBox="0 0 210 150" role="img" aria-label="${esc(p.label||'Triangle')}" preserveAspectRatio="xMidYMid meet"><polygon points="${path}" fill="#dceaff" stroke="#172a41" stroke-width="2"/><path d="M${A} L${B}" stroke="#1749b0" stroke-width="4"/><path d="M${A} L${C}" stroke="#9b2768" stroke-width="4"/>${arc}${labels}</svg>`;
}
function figure(p){
 if(p.mode==='number')return `<div class="triangle-number" role="img" aria-label="${esc(p.value+' '+p.unit)}">${p.value}<small>${esc(p.unit)}</small></div>`;
 let lines=[],drawing='',prime=/Opció/.test(p.label||'')?'′':'';
 if(p.mode==='missing'){
  drawing=triangle({mode:'ccc',sides:[Math.hypot(p.b,p.c),p.b,p.c],label:'Triangle inicial'});
  lines=[`b = ${p.b} → b′ = ${p.b*p.factor} cm`,`c = ${p.c} → c′ = ? cm`];
 }else{
  drawing=triangle(p);
  if(p.mode==='angle-model')lines=[`A = ${p.angles[0]}°`,`A′ = ?`];
  if(p.mode==='aa')lines=[`A${prime} = ${p.angles[0]}°`,`B${prime} = ${p.angles[1]}°`];
  if(p.mode==='ccc')lines=p.sides.map((n,i)=>`${['a','b','c'][i]}${prime} = ${n} cm`);
  if(p.mode==='cac')lines=[`b${prime} = ${p.sides[0]} cm`,`c${prime} = ${p.sides[1]} cm`,`A${prime} = ${p.angle}°`];
 }
 return `<div class="triangle-drawing">${drawing}<div class="triangle-measures">${lines.map(s=>`<div data-measure="${s[0]}">${esc(s)}</div>`).join('')}</div></div>`;
}
const api={figure,vertices};if(typeof module!=='undefined'&&module.exports)module.exports=api;else window.TRIANGLES_ESCAPE_DIAGRAMS=api;
})();
