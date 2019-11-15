let hours = 00;
let minutes = 00;
let seconds = 00;
let hoursTimeLabel = document.getElementById("hoursTimer");
let minutesTimeLabel = document.getElementById("minutesTimer");
let secondsTimeLabel = document.getElementById("secondsTimer");
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

function increaseTime(button) {
  if(button == "hours") {
    if(hours == 24) {
      hours = 00;
    }
    else {
      hours++;

    }
    hoursTimeLabel.innerHTML = hours;
  }
  else if(button == "minutes") {
    if(minutes == 60) {
      minutes = 00;
    }
    else {
      minutes++;
    }
    minutesTimeLabel.innerHTML = minutes;
  }
  else if(button == "seconds") {
    if(seconds == 60) {
      seconds = 00;
    }
    else {
      seconds++;
    }
    secondsTimeLabel.innerHTML = seconds;
  }
}

function decreaseTime(button) {
  if(button == "hours") {
    if(hours == 0) {
      hours = 24;
    }
    else {
      hours--;
    }
    hoursTimeLabel.innerHTML = hours;
  }
  else if(button == "minutes") {
    if(minutes == 0) {
      minutes = 60;
    }
    else {
      minutes--;
    }
    minutesTimeLabel.innerHTML = minutes;
  }
  else if(button == "seconds") {
    if(seconds == 0) {
      seconds = 60;
    }
    else {
      seconds--;
    }
    secondsTimeLabel.innerHTML = seconds;
  }
}
