let infoOpen = false;
let gamesOpen = false;
$("#infoButton").click(() => {
  if (infoOpen) {
    infoOpen = false;
    $("#infoText").fadeOut("linear");
    $("#statusText").fadeIn("linear");
    $("#game").animate({ opacity: 1 }, "slow");
  } else {
    infoOpen = true;
    $("#infoText").fadeIn("linear");
    $("#statusText").fadeOut("linear");
    $("#game").animate({ opacity: 0.01 }, "slow");
  }
});
