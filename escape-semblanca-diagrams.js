/* Esquemes SVG: les mesures dels models es dibuixen a la mateixa escala. */
(()=>{
'use strict';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const palette={base:'#1749b0',height:'#9b2768',depth:'#007763'};
function text(x,y,value,color='#172a41',size=19){return `<text x="${x}" y="${y}" text-anchor="middle" fill="${color}" style="font-size:${size}px">${esc(value)}</text>`;}
function figure(p,scale=22,compact=false){
 const kind=p.kind,d=p.dimensions.length?p.dimensions:kind==='rectangle'?[4,2]:kind==='triangle'?[3,4]:kind==='prisma'?[3,2,2]:[3,3,3];
 const w=d[0]*scale,h=(d[1]||d[0])*scale,depth=(d[2]||d[0])*scale*.38;
 let g='',caption='';
 const color=compact?'#dceaff':/final/i.test(p.label)?'#ffe5a1':'#c9eee4',ink='#172a41';
 if(['quadrat','rectangle','triangle'].includes(kind)){
  const x=140-w/2,y=142-h/2,rot=p.rotation||0;
  const shape=kind==='triangle'?`<path d="M${x} ${y+h} H${x+w} L${x} ${y} Z"/>`:`<rect x="${x}" y="${y}" width="${w}" height="${h}"/>`;
  g=`<g transform="rotate(${rot} 140 142)" fill="${color}" stroke="${ink}" stroke-width="2">${shape}<path d="M${x+12} ${y+h} V${y+h-12} H${x}" fill="none"/><path d="M${x} ${y+h} H${x+w}" stroke="${palette.base}" stroke-width="4"/><path d="M${x} ${y+h} V${y}" stroke="${palette.height}" stroke-width="4"/></g>`;
  if(!compact){
   const point=(a,b)=>{const r=rot*Math.PI/180;return [140+(a-140)*Math.cos(r)-(b-142)*Math.sin(r),142+(a-140)*Math.sin(r)+(b-142)*Math.cos(r)];};
   const b=point(140,y+h+22),a=point(x-24,142);
   g+=text(b[0],b[1]+6,p.marks?'B':`${d[0]} cm`,palette.base)+text(a[0],a[1]+6,p.marks?'H':`${d[1]} cm`,palette.height);
   if(p.marks)caption=text(140,248,`B: ${d[0]} cm`,palette.base)+text(140,276,`H: ${d[1]} cm`,palette.height);
   if(p.angleMark){const v=point(x-18,y+h+20);g+=text(v[0],v[1]+6,p.angleMark,palette.depth);caption=text(140,264,p.angleMark==='A'?'Angle A: 90°':'Angle A′: ?',palette.depth);}
  }
 }else if(kind==='cercle'||kind==='esfera'){
  const r=d[0]*scale;
  g=`<circle cx="140" cy="142" r="${r}" fill="${color}" stroke="${ink}" stroke-width="2"/>`;
  if(kind==='esfera')g+=`<ellipse cx="140" cy="142" rx="${r}" ry="${r*.28}" fill="none" stroke="${ink}" stroke-width="2" stroke-dasharray="5 4"/><path d="M140 ${142-r} Q${140+r*.8} 142 140 ${142+r}" fill="none" stroke="${ink}" stroke-width="2"/>`;
  if(!compact){g+=`<path d="M140 142 H${140+r}" stroke="${palette.base}" stroke-width="3"/><circle cx="140" cy="142" r="3" fill="${palette.base}"/>`;caption=text(140,248,`Radi: ${d[0]} cm`,palette.base);}
 }else if(kind==='cub'||kind==='prisma'){
  const x=140-(w+depth)/2,y=125+(h+depth)/2;
  g=`<g stroke="${ink}" stroke-width="2"><path d="M${x} ${y-h} H${x+w} L${x+w+depth} ${y-h-depth} H${x+depth} Z" fill="#ffdf82"/><path d="M${x+w} ${y} V${y-h} L${x+w+depth} ${y-h-depth} V${y-depth} Z" fill="#99d4cd"/><rect x="${x}" y="${y-h}" width="${w}" height="${h}" fill="${color}"/></g>`;
  if(!compact){g+=`<path d="M${x} ${y} H${x+w}" stroke="${palette.base}" stroke-width="4"/><path d="M${x} ${y} V${y-h}" stroke="${palette.height}" stroke-width="4"/><path d="M${x+w} ${y} L${x+w+depth} ${y-depth}" stroke="${palette.depth}" stroke-width="4"/>`;caption=text(140,238,`Amplada: ${d[0]} cm`,palette.base,18)+text(140,264,`Altura: ${d[1]} cm`,palette.height,18)+text(140,290,`Fondària: ${d[2]} cm`,palette.depth,18);}
 }else if(kind==='cilindre'){
  const x=140-w/2,y=142-h/2,r=w*.15;
  g=`<path d="M${x} ${y} V${y+h} C${x} ${y+h+r*1.33} ${x+w} ${y+h+r*1.33} ${x+w} ${y+h} V${y}" fill="${color}" stroke="${ink}" stroke-width="2"/><ellipse cx="140" cy="${y}" rx="${w/2}" ry="${r}" fill="#ffdf82" stroke="${ink}" stroke-width="2"/>`;
 }else if(kind==='piramide'){
  const a=`140 ${142-(h+depth)/2}`,b=`${140-(w+depth)/2} ${142+(h-depth)/2}`,c=`${140+(w-depth)/2} ${142+(h+depth)/2}`,e=`${140+(w+depth)/2} ${142+(h-depth)/2}`,back=`${140+(-w+depth)/2} ${142+(h-3*depth)/2}`;
  g=`<path d="M${a} L${b} L${c} Z" fill="${color}" stroke="${ink}" stroke-width="2"/><path d="M${a} L${e} L${c} Z" fill="#99d4cd" stroke="${ink}" stroke-width="2"/><path d="M${b} L${back} L${e}" fill="none" stroke="${ink}" stroke-dasharray="5 4"/>`;
 }else if(kind==='pentagon'){
  const radius=d[0]*scale,pts=Array.from({length:5},(_,i)=>{const a=(i*72-90)*Math.PI/180;return `${140+radius*Math.cos(a)},${142+radius*Math.sin(a)}`;}).join(' ');
  g=`<polygon points="${pts}" fill="${color}" stroke="${ink}" stroke-width="2"/>`;
 }
 if(compact)caption=text(140,286,(p.label||'').split(' · ').slice(1).join(' · '),ink,24);
 return `<svg viewBox="0 0 280 306" role="img" aria-label="${esc(p.label||kind)}${compact?'':', mesures en centímetres: '+d.join(', ')}"><title>${esc(p.label||kind)}</title>${compact?'':text(140,32,p.label||'',ink,20)}${g}${caption}</svg>`;
}
function visuals(q){
 const panels=q.showChoices?q.choices.map((c,i)=>({...c.figure,label:`${String.fromCharCode(65+i)} · ${c.label}`})):q.panels;
 const max=Math.max(...panels.flatMap(p=>p.dimensions.length?p.dimensions:[3]));
 const round=panels.some(p=>['cercle','esfera'].includes(p.kind));
 const scale=Math.min(28,(round?75:132)/max);
 const body=q.category==='cossos';
 const caption=q.showChoices?'Les lletres del dibuix corresponen a les opcions.':body?'Comparem la forma, no el color. Les mesures són en centímetres.':'Les mesures són en centímetres. El gir i el color no decideixen la semblança.';
 return `<div class="trial-visual"><div class="shape-grid${q.showChoices?' many':''}">${panels.map(p=>figure(p,scale,q.showChoices)).join('')}</div><p class="scene-caption">${caption}</p></div>`;
}
const api={figure,visuals};if(typeof module!=='undefined'&&module.exports)module.exports=api;else window.SEMBLANCA_ESCAPE_DIAGRAMS=api;
})();
