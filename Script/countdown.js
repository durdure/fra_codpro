const countdownContainer = document.getElementById("countdown-container");

const targetDate = new Date("2023-12-31T23:59:59").getTime();

function startCountdown() {
  const currentDate = new Date().getTime();

  const timeRemaining = targetDate - currentDate;

  const daysElement = document.getElementById("day");
  const hoursElement = document.getElementById("hour");
  const minutesElement = document.getElementById("minute");
  const secondsElement = document.getElementById("second");

  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");


  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;

}


setInterval(startCountdown, 1000);

