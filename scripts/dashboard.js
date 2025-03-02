// Load Data on Page Load
document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    loadPomodoroStats();
    loadLastNote();
  });
  
  // Load Tasks
  function loadTasks() {
    const tasks = getLocalStorageData('tasks');
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = tasks.map(task => `
      <li class="list-group-item d-flex justify-content-between align-items-center task-item ${task.completed ? 'completed' : ''}">
        <span onclick="toggleComplete(${task.id})">${task.text}</span>
        <div>
          <span class="task-priority ${task.priority}"></span>
          <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </li>
    `).join('');
  }
  
  // Load Pomodoro Stats
  function loadPomodoroStats() {
    const completedSessions = getLocalStorageData('completedSessions', 0);
    document.getElementById('completedSessions').textContent = completedSessions;
  }
  
  // Load Last Note
  function loadLastNote() {
    const notes = getLocalStorageData('notes');
    const lastNote = notes.length > 0 ? notes[notes.length - 1].text : "No notes yet!";
    document.getElementById('lastNote').textContent = lastNote;
  }