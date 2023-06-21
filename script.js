"use strict";

// DOM - Selections
const play_pause_btn = document.querySelector(".play-icon");

// eventListeners
// *** This is for changing the svg image on the play_pause_btn
play_pause_btn.addEventListener("click", function () {
  if (play_pause_btn.src.includes("play.svg")) {
    play_pause_btn.src = "./SVG/SVG/pause.svg";
  } else if (play_pause_btn.src.includes("pause.svg")) {
    play_pause_btn.src = "./SVG/SVG/play.svg";
  }
});
