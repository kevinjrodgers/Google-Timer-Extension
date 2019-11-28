let hours = 0;
let minutes = 0;
let seconds = 0;
let hoursTimeLabel = document.getElementById("hoursTimer");
let minutesTimeLabel = document.getElementById("minutesTimer");
let secondsTimeLabel = document.getElementById("secondsTimer");
let time;
let timerVar;
// -------------------------------
let increaseHoursBtn = document.getElementById("increaseHoursButton");
let increaseMinutesBtn = document.getElementById("increaseMinutesButton");
let increaseSecondsBtn = document.getElementById("increaseSecondsButton");
increaseHoursBtn.addEventListener("click", () => {
  increaseTime("hours");
});
increaseMinutesBtn.addEventListener("click", () => {
  increaseTime("minutes");
});
increaseSecondsBtn.addEventListener("click", () => {
  increaseTime("seconds");
});
// -------------------------------
let decreaseHoursBtn = document.getElementById("decreaseHoursButton");
let decreaseMinutesBtn = document.getElementById("decreaseMinutesButton");
let decreaseSecondsBtn = document.getElementById("decreaseSecondsButton");
decreaseHoursBtn.addEventListener("click", () => {
  decreaseTime("hours");
});
decreaseMinutesBtn.addEventListener("click", () => {
  decreaseTime("minutes");
});
decreaseSecondsBtn.addEventListener("click", () => {
  decreaseTime("seconds");
});
// -------------------------------
let startTimerBtn = document.getElementById("startTimerButton");
let pauseTimerBtn = document.getElementById("pauseTimerButton");
let stopTimerBtn = document.getElementById("stopTimerButton");
startTimerBtn.addEventListener("click", () => {
  time = (hours * 3600) + (minutes * 60) + (seconds);
  if(time == 0) {
    alert("Please enter a valid time.");
  }
  else {
    timerVar = setInterval(timer, 1000);
    switchToTimerMode();
  }
});
pauseTimerBtn.addEventListener("click", () => {
  window.clearInterval(timerVar);
  pauseOrResume();
  //time = (hours * 3600) + (minutes * 60) + (seconds);
  //timerVar = setInterval(timer, 1000);
});
stopTimerBtn.addEventListener("click", () => {
  window.clearInterval(timerVar);
  hours = 0;
  minutes = 0;
  seconds = 0;
  hoursTimeLabel.innerHTML = hours;
  minutesTimeLabel.innerHTML = minutes;
  secondsTimeLabel.innerHTML = seconds;
  switchToInputMode();

});
function increaseTime(button) {
  if(button == "hours") {
    if(hours >= 23) {
      hours = 0;
    }
    else {
      hours++;

    }
    hoursTimeLabel.innerHTML = hours;
  }
  else if(button == "minutes") {
    if(minutes >= 59) {
      minutes = 0;
    }
    else {
      minutes++;
    }
    minutesTimeLabel.innerHTML = minutes;
  }
  else if(button == "seconds") {
    if(seconds >= 59) {
      seconds = 0;
    }
    else {
      seconds++;
    }
    secondsTimeLabel.innerHTML = seconds;
  }
}

function decreaseTime(button) {
  if(button == "hours") {
    if(hours <= 0) {
      hours = 23;
    }
    else {
      hours--;
    }
    hoursTimeLabel.innerHTML = hours;
  }
  else if(button == "minutes") {
    if(minutes <= 0) {
      minutes = 59;
    }
    else {
      minutes--;
    }
    minutesTimeLabel.innerHTML = minutes;
  }
  else if(button == "seconds") {
    if(seconds <= 0) {
      seconds = 59;
    }
    else {
      seconds--;
    }
    secondsTimeLabel.innerHTML = seconds;
  }
}

function timer() {
  time = time - 1;
  //seconds--;
  hoursTimeLabel.innerHTML = Math.floor((time/3600) % 24);
  minutesTimeLabel.innerHTML = Math.floor((time/60) % 60);
  secondsTimeLabel.innerHTML = Math.floor(time % 60);
  //secondsTimeLabel.innerHTML = seconds;
  if(time < 0) {
    window.clearInterval(timerVar);
    hours = 0;
    minutes = 0;
    seconds = 0;
    hoursTimeLabel.innerHTML = hours;
    minutesTimeLabel.innerHTML = minutes;
    secondsTimeLabel.innerHTML = seconds;
    alert("Times up!");
    switchToInputMode();
  }
}

function switchToTimerMode() {
  increaseHoursBtn.style.visibility = "hidden";
  increaseMinutesBtn.style.visibility = "hidden";
  increaseSecondsBtn.style.visibility = "hidden";
  decreaseHoursBtn.style.visibility = "hidden";
  decreaseMinutesBtn.style.visibility = "hidden";
  decreaseSecondsBtn.style.visibility = "hidden";
  startTimerBtn.style.display = "none";
  pauseTimerBtn.style.visibility = "visible";
  stopTimerBtn.style.visibility = "visible";
}

function switchToInputMode() {
  increaseHoursBtn.style.visibility = "visible";
  increaseMinutesBtn.style.visibility = "visible";
  increaseSecondsBtn.style.visibility = "visible";
  decreaseHoursBtn.style.visibility = "visible";
  decreaseMinutesBtn.style.visibility = "visible";
  decreaseSecondsBtn.style.visibility = "visible";
  startTimerBtn.style.display = "block";
  pauseTimerBtn.style.visibility = "hidden";
  stopTimerBtn.style.visibility = "hidden";
}

function pauseOrResume() {
  if(pauseTimerBtn.innerHTML == "Pause") {
    pauseTimerBtn.innerHTML = "Resume";
  }
  else if(pauseTimerBtn.innerHTML == "Resume") {
    pauseTimerBtn.innerHTML = "Pause";
  }
}
