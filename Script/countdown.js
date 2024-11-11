const countdownContainer = document.getElementById("countdown-container");

const countdownDuration = 0.1 * 60 * 1000; 
const targetDate = new Date().getTime() + countdownDuration;

function startCountdown() {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const minutesElement = document.getElementById("minute");
  const secondsElement = document.getElementById("second");

  if (timeRemaining <= 0) {
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    clearInterval(intervalId); 
    // alert("Count Ended")
    return;
  }

  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");

}


function showAlert() {
  const alertBox = document.getElementById("custom-alert");
  alertBox.style.display = "flex";
}

function closeAlert() {
  const alertBox = document.getElementById("custom-alert");
  alertBox.style.display = "none";
}


const intervalId = setInterval(startCountdown, 1000);
