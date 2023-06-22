"use strict";

// DOM - Selections
const play_pause_btn = document.querySelector(".play-icon");
const greeting_text = document.querySelector(".greeting-text");

// This is for getting the current time/hour
const date = new Date();
const current_hour = date.getHours();

// This is for changing the greeting text depending on the current hour
window.addEventListener("onload", function () {
  if (current_hour >= 22 || current_hour < 1)
    greeting_text.textContent = "Good Night";
  if (current_hour > 0 && current_hour <= 12) {
    greeting_text.textContent = "Good Morning";
  }
  if (current_hour > 12 && current_hour < 23) {
    greeting_text.textContent = "Good Evening";
  }
});
// eventListeners
// *** This is for changing the svg image on the play_pause_btn
play_pause_btn.addEventListener("click", function () {
  if (play_pause_btn.src.includes("play.svg")) {
    play_pause_btn.src = "./SVG/SVG/pause.svg";
  } else if (play_pause_btn.src.includes("pause.svg")) {
    play_pause_btn.src = "./SVG/SVG/play.svg";
  }
});
