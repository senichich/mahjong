const timer = document.getElementById("timer_time");
let intervalId;
let seconds = 0;

export function startTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timer.textContent = `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }, 1000);
}

export function stopTimer() {
  clearInterval(intervalId);
}

export function restartTimer() {
  clearInterval(intervalId);
  seconds = 0;
  timer.textContent = "0:00";
}
