/* =========================================
   TRAIN OF THOUGHT
   LANDING PAGE ANIMATION
   ========================================= */


const train =
  document.getElementById("train");

const departures =
  document.getElementById("departures");

const replay =
  document.getElementById("replay");


let departuresTimer;
let readyTimer;


/* =========================================
   PLAY LANDING
   ========================================= */

function playLanding() {

  /*
    Clear previous timers
  */

  clearTimeout(departuresTimer);
  clearTimeout(readyTimer);


  /*
    Reset train
  */

  train.classList.remove("arriving");


  /*
    Reset Departures
  */

  departures.classList.remove(
    "flicker",
    "ready"
  );


  /*
    Force browser to register reset
  */

  void train.offsetWidth;


  /*
    START TRAIN
  */

  train.classList.add("arriving");


  /*
    Train takes 9 seconds.

    After it stops, wait briefly,
    then flicker Departures.
  */

  departuresTimer =
    setTimeout(() => {

      departures.classList.add("flicker");


      readyTimer =
        setTimeout(() => {

          departures.classList.remove(
            "flicker"
          );

          departures.classList.add(
            "ready"
          );

        }, 1600);


    }, 9400);
}


/* =========================================
   START
   ========================================= */

window.addEventListener(
  "load",
  playLanding
);


/* =========================================
   REPLAY
   ========================================= */

replay.addEventListener(
  "click",
  playLanding
);


/* =========================================
   DEPARTURES

   No destination yet.
   We'll connect this AFTER the
   landing page is approved.
   ========================================= */

departures.addEventListener(
  "click",
  () => {

    if (!departures.classList.contains("ready")) {
      return;
    }

    console.log("Departures selected.");

  }
);
