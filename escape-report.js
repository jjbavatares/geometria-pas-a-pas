(()=>{
'use strict';

const winAnsi = {'’':146,'‘':145,'“':147,'”':148,'–':150,'—':151,'…':133,'€':128,'Œ':140,'œ':156,'Ÿ':159};
function printable(value){
  return String(value).normalize('NFC').replace(/[′−√×÷]/g,s=>({'′':"'",'−':'-','√':'arrel ','×':'·','÷':':'}[s]))
    .replace(/\s+/g,' ').replace(/./gu,c=>c.charCodeAt(0)<=255||c in winAnsi?c:'?').trim();
}
function pdfText(text){
  return '<'+Array.from(printable(text),c=>(winAnsi[c]??c.charCodeAt(0)).toString(16).padStart(2,'0')).join('')+'>';
}
function wrap(text,limit=76){
  const lines=[];
  let line='';
  for(const word of printable(text).split(' ')){
    if(line.length+word.length+1>limit&&line){lines.push(line);line='';}
    let rest=word;
    while(rest.length>limit){lines.push(rest.slice(0,limit));rest=rest.slice(limit);}
    line=line?line+' '+rest:rest;
  }
  if(line)lines.push(line);
  return lines;
}

function summary(state,target){
  const total=state.questions.length, completed=state.results.length;
  const verdict=completed<total?'Partida interrompuda':state.correct>=target?'Missió superada':'Missió no superada';
  const rows=state.questions.map((question,index)=>{
    const result=state.results[index];
    const current=!result&&index===state.index;
    const attempts=result?.attempts??(current?state.attempts:0);
    const hints=result?.hints??(current?state.hints:0);
    const label=result?(result.good?'Encertada':'Fallada'):attempts?'En curs':'Pendent';
    return {prompt:question.prompt,label,attempts,hints};
  });
  return {total,completed,correct:state.correct,wrong:state.wrong,verdict,rows};
}

function makePdf(game,name,progress,date){
  const ink='0.10 0.18 0.28', green='0.04 0.34 0.24', muted='0.28 0.34 0.43', red='0.61 0.13 0.20';
  const pages=[];
  let page,y;
  function line(text,x,baseline,size=11,font='F1',color=ink){
    page.push('BT /'+font+' '+size+' Tf '+color+' rg 1 0 0 1 '+x+' '+baseline+' Tm '+pdfText(text)+' Tj ET');
  }
  function rule(baseline){page.push('0.83 0.88 0.91 RG 0.6 w 48 '+baseline+' m 547 '+baseline+' l S');}
  function paragraph(text){
    for(const segment of wrap(text)){line(segment,48,y,10.5,'F3');y-=15;}
  }
  function newPage(){
    page=[];pages.push(page);
    page.push('0.90 0.96 0.94 rg 40 718 515 87 re f');
    line('GEOMETRIA PAS A PAS  /  ESCAPE ROOM',48,782,10,'F2',green);
    line('Informe de progrés i resultats',48,754,22,'F2');
    line(game,48,732,14,'F2');
    y=692;
    if(name)paragraph('Alumne/a: '+name);
    paragraph('Data i hora: '+date);
    if(pages.length===1){
      line(progress.verdict,48,y-5,14,'F2',progress.verdict==='Missió superada'?green:ink);
      y-=27;
      paragraph('Proves completades: '+progress.completed+' de '+progress.total+'  |  Per completar: '+(progress.total-progress.completed));
      paragraph('Encerts: '+progress.correct+'  |  Errors: '+progress.wrong);
    }
    y-=10;
    line('DETALL DE LES PROVES',48,y,11,'F2',green);
    y-=22;
  }
  newPage();
  progress.rows.forEach((row,index)=>{
    const prompt=wrap(row.prompt);
    const height=39+prompt.length*14;
    if(y-height<61)newPage();
    line('Prova '+(index+1)+'  /  '+row.label,48,y,11,'F2',row.label==='Encertada'?green:row.label==='Fallada'?red:ink);
    y-=16;
    for(const segment of prompt){line(segment,48,y,10.5,'F3');y-=14;}
    line('Intents: '+row.attempts+'   ·   Ajudes consultades: '+row.hints,48,y,10,'F1',muted);
    y-=8;rule(y);y-=15;
  });
  const objects=[
    '<< /Type /Catalog /Pages 2 0 R >>',
    '',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Courier /Encoding /WinAnsiEncoding >>'
  ];
  const kids=pages.map((commands,index)=>{
    const footer='BT /F1 9 Tf 0.28 0.34 0.43 rg 1 0 0 1 48 38 Tm '+pdfText('Geometria pas a pas  ·  Pàgina '+(index+1)+' de '+pages.length)+' Tj ET';
    const stream=commands.concat(footer).join('\n')+'\n';
    const pageId=objects.length+1;
    objects.push('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> /Contents '+(pageId+1)+' 0 R >>',
      '<< /Length '+stream.length+' >>\nstream\n'+stream+'endstream');
    return pageId+' 0 R';
  });
  objects[1]='<< /Type /Pages /Kids ['+kids.join(' ')+'] /Count '+kids.length+' >>';
  // Every string emitted above is ASCII, so character offsets also count bytes.
  let pdf='%PDF-1.4\n';
  const offsets=objects.map((object,index)=>{
    const offset=pdf.length;
    pdf+=(index+1)+' 0 obj\n'+object+'\nendobj\n';
    return offset;
  });
  const xref=pdf.length;
  pdf+='xref\n0 '+(objects.length+1)+'\n0000000000 65535 f \n';
  for(const offset of offsets)pdf+=String(offset).padStart(10,'0')+' 00000 n \n';
  return pdf+'trailer\n<< /Size '+(objects.length+1)+' /Root 1 0 R >>\nstartxref\n'+xref+'\n%%EOF\n';
}

let student='';
function show(state,target,leave){
  if(!state)return false;
  if(document.querySelector('[data-progress-dialog]'))return true;
  const progress=summary(state,target);
  const dialog=document.createElement('dialog');
  dialog.className='escape-dialog progress-dialog';
  dialog.dataset.progressDialog='';
  dialog.setAttribute('aria-labelledby','progress-title');
  dialog.innerHTML=
    '<h2 id="progress-title">Informe de progrés</h2>'+
    '<p class="progress-summary"></p>'+
    '<p>Descarrega el PDF per lliurar-lo al professorat.</p>'+
    '<label for="progress-name">Nom i cognoms (opcional)</label>'+
    '<input id="progress-name" type="text" maxlength="80" autocomplete="off">'+
    '<div class="dialog-actions">'+
      '<button type="button" class="escape-btn" data-progress-download>Descarrega el PDF ↓</button>'+
      (leave?'<button type="button" class="escape-btn secondary" data-progress-leave>Surt del joc</button>':'')+
      '<button type="button" class="escape-btn secondary" data-progress-cancel>'+(leave?'Continua al joc':'Tanca l’informe')+'</button>'+
    '</div><p role="status" class="progress-feedback"></p>';
  dialog.querySelector('.progress-summary').textContent=progress.verdict+' · '+progress.completed+' de '+progress.total+' proves completades · '+progress.correct+' encerts · '+progress.wrong+' errors';
  const input=dialog.querySelector('input');
  input.value=student;
  input.addEventListener('input',()=>{student=input.value;});
  dialog.addEventListener('close',()=>dialog.remove(),{once:true});
  dialog.querySelector('[data-progress-cancel]').addEventListener('click',()=>dialog.close());
  dialog.querySelector('[data-progress-leave]')?.addEventListener('click',()=>{
    dialog.close();
    leave();
  });
  dialog.querySelector('[data-progress-download]').addEventListener('click',()=>{
    const now=new Date();
    const game=document.title.split(' · ')[0];
    const date=new Intl.DateTimeFormat('ca',{dateStyle:'short',timeStyle:'short'}).format(now);
    const slug=location.pathname.split('/').pop().replace(/\.html$/,'');
    const url=URL.createObjectURL(new Blob([makePdf(game,input.value.trim(),progress,date)],{type:'application/pdf'}));
    const link=document.createElement('a');
    link.href=url;
    link.download='Informe_'+slug+'_'+[now.getFullYear(),now.getMonth()+1,now.getDate()].map(n=>String(n).padStart(2,'0')).join('-')+'.pdf';
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(()=>URL.revokeObjectURL(url),30000);
    dialog.querySelector('.progress-feedback').textContent='Descàrrega iniciada.';
  });
  document.body.append(dialog);
  dialog.showModal();
  return true;
}

window.ESCAPE_REPORT={show,button:'<button type="button" class="escape-btn" data-progress-report>Descarrega l’informe PDF ↓</button>'};
})();
