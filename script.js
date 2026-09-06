const train = document.getElementById("train");
const departures = document.getElementById("departures");
const replay = document.getElementById("replay");


function startLandingAnimation() {

  // Reset animations
  train.classList.remove("is-arriving");

  departures.classList.remove(
    "is-flickering",
    "is-lit"
  );


  // Force browser to reset animation
  void train.offsetWidth;


  // Start train
  train.classList.add("is-arriving");


  /*
    Train animation = 7.5 seconds.

    Give it a tiny pause after stopping,
    then activate Departures.
  */

  setTimeout(() => {

    departures.classList.add(
      "is-flickering"
    );


    setTimeout(() => {

      departures.classList.remove(
        "is-flickering"
      );

      departures.classList.add(
        "is-lit"
      );

    }, 1350);


  }, 7900);
}


/* Start when page loads */

window.addEventListener(
  "load",
  startLandingAnimation
);


/* Replay while we're testing */

replay.addEventListener(
  "click",
  startLandingAnimation
);
