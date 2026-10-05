/* Petites melodies originals, sense fitxers externs ni àudio de veu. */
(()=>{
'use strict';
let enabled=true,context=null,voices=[],lastPlayed=null;
const NOTE_PEAK=.30;
try{enabled=localStorage.getItem('geometria-escape-sound')!=='off';}catch{}
const button=document.getElementById('sound-toggle');
const sequences={
 correct:[[523.25,0,.12],[659.25,.15,.12],[783.99,.3,.23]],
 wrong:[[392,0,.17],[329.63,.23,.27]],
 victory:[[523.25,0,.2],[659.25,.24,.2],[783.99,.48,.3],[659.25,.86,.2],[783.99,1.1,.2],[1046.5,1.34,.55],[783.99,2,.25],[1046.5,2.3,.8],[261.63,0,1.8],[349.23,2,.95]],
 defeat:[[440,0,.3],[392,.4,.3],[349.23,.8,.4],[329.63,1.35,.4],[293.66,1.9,.75],[220,0,1.1],[196,1.3,1.2]]
};
function update(){button.textContent=enabled?'So activat 🔊':'So desactivat';button.setAttribute('aria-pressed',String(enabled));button.setAttribute('aria-label',enabled?'Desactiva el so':'Activa el so');}
function stop(){voices.forEach(v=>{try{v.stop();}catch{}});voices=[];}
function unlock(){
 if(!enabled)return;
 const Constructor=window.AudioContext||window.webkitAudioContext;
 if(!Constructor){enabled=false;button.disabled=true;button.textContent='So no disponible';button.setAttribute('aria-pressed','false');return;}
 try{if(!context)context=new Constructor();if(context.state==='suspended')context.resume().catch(()=>{});}catch{enabled=false;update();}
}
function play(name){
 if(!enabled||!sequences[name])return;
 unlock();if(!context)return;stop();lastPlayed=name;
 const start=context.currentTime+.03;
 sequences[name].forEach(([frequency,offset,duration])=>{
  const tone=context.createOscillator(),gain=context.createGain();tone.type='sine';tone.frequency.value=frequency;
  gain.gain.setValueAtTime(0,start+offset);gain.gain.linearRampToValueAtTime(NOTE_PEAK,start+offset+.025);
  gain.gain.exponentialRampToValueAtTime(.001,start+offset+duration);
  tone.connect(gain);gain.connect(context.destination);tone.start(start+offset);tone.stop(start+offset+duration+.03);voices.push(tone);
  tone.onended=()=>{tone.disconnect();gain.disconnect();voices=voices.filter(v=>v!==tone);};
 });
}
button.addEventListener('click',()=>{enabled=!enabled;stop();try{localStorage.setItem('geometria-escape-sound',enabled?'on':'off');}catch{}update();if(enabled)unlock();});
update();window.ESCAPE_AUDIO={unlock,play,stop,status:()=>({enabled,contextState:context?.state||'not-started',lastPlayed,activeVoices:voices.length})};
})();
