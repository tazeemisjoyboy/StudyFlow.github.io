let timeLeft, timerInterval;
let isWork = true, completedSessions = 0;
let workDuration = 25, breakDuration = 5;

// Update Timer Display
function updateTimer() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  document.getElementById('timer-display').textContent = `${minutes}:${seconds}`;
  document.getElementById('progress-bar').style.width = `${(timeLeft / (isWork ? workDuration : breakDuration) / 60) * 100}%`;
}

// Start/Pause Timer
function startPauseTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById('startPauseBtn').innerHTML = '<i class="fas fa-play"></i> Start';
  } else {
    document.getElementById('startPauseBtn').innerHTML = '<i class="fas fa-pause"></i> Pause';
    timerInterval = setInterval(() => {
      if (timeLeft <= 0) {
        switchMode();
      } else {
        timeLeft--;
        updateTimer();
      }
    }, 1000);
  }
}

// Reset Timer
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  isWork = true;
  timeLeft = workDuration * 60;
  updateTimer();
  document.getElementById('progress-bar').style.width = '100%';
  document.getElementById('startPauseBtn').innerHTML = '<i class="fas fa-play"></i> Start';
}

// Set Timer Settings
function setTimerSettings() {
  workDuration = parseInt(document.getElementById('workDuration').value, 10);
  breakDuration = parseInt(document.getElementById('breakDuration').value, 10);
  resetTimer();
}

// Initialize Timer
updateTimer();