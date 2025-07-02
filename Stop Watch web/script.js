let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function updateDisplay() {
  const display = document.getElementById("display");
  const time = new Date(elapsedTime);
  const minutes = time.getUTCMinutes().toString().padStart(2, "0");
  const seconds = time.getUTCSeconds().toString().padStart(2, "0");
  const milliseconds = Math.floor(time.getUTCMilliseconds() / 10).toString().padStart(2, "0");

  display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function startStop() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
    isRunning = true;
  }
}

function pause() {
  clearInterval(timerInterval);
  isRunning = false;
}

function reset() {  
  clearInterval(timerInterval);
  elapsedTime = 0;
  isRunning = false;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (isRunning) {
    const lapTime = document.createElement("li");
    lapTime.textContent = document.getElementById("display").textContent;
    document.getElementById("laps").appendChild(lapTime);
  }
}
