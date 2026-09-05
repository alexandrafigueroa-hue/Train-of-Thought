const train = document.querySelector('#train');
const departures = document.querySelector('.departures-sign');
const replay = document.querySelector('#replay');
let audioCtx = null;
let arrivalFinished = false;
let pendingSound = false;

function unlockAudio(){
  try{
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!audioCtx) audioCtx = new AudioCtx();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    if (arrivalFinished && pendingSound) playChime();
  } catch(e) {}
}

function playChime(){
  if (!audioCtx || audioCtx.state !== 'running') { pendingSound = true; return; }
  const now = audioCtx.currentTime;
  const master = audioCtx.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.065, now + 0.03);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 1.05);
  master.connect(audioCtx.destination);
  [523.25, 659.25].forEach((freq,i)=>{
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine'; osc.frequency.value = freq;
    const t = now + i * 0.16;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.34, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
    osc.connect(gain); gain.connect(master);
    osc.start(t); osc.stop(t + 0.7);
  });
  pendingSound = false;
}

function start(){
  arrivalFinished = false;
  departures.classList.remove('call-attention');
  train.classList.remove('arrive');
  void train.offsetWidth;
  train.classList.add('arrive');
}

train.addEventListener('animationend',()=>{
  arrivalFinished = true;
  departures.classList.add('call-attention');
  playChime();
});

replay.addEventListener('pointerdown', unlockAudio);
replay.addEventListener('click', start);
window.addEventListener('pointerdown', unlockAudio, {once:true});
window.addEventListener('load',()=>setTimeout(start,250));
