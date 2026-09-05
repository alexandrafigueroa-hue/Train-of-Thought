
const train=document.getElementById("train");
const departures=document.getElementById("departures");
const replay=document.getElementById("replay");

function startLandingAnimation(){
  train.classList.remove("is-arriving");
  departures.classList.remove("is-flickering","is-lit");
  void train.offsetWidth;
  train.classList.add("is-arriving");

  setTimeout(()=>{
    departures.classList.add("is-flickering");
    setTimeout(()=>{
      departures.classList.remove("is-flickering");
      departures.classList.add("is-lit");
    },1250);
  },4650);
}

window.addEventListener("load",startLandingAnimation);
replay.addEventListener("click",startLandingAnimation);
