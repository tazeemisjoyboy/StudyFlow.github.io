// Add Study Session
function addStudySession() {
    const sessionDate = document.getElementById('sessionDate').value;
    const sessionSubject = document.getElementById('sessionSubject').value;
    const sessionDuration = document.getElementById('sessionDuration').value;
  
    if (!sessionDate || !sessionSubject || !sessionDuration) {
      alert("All fields are required!");
      return;
    }
  
    const sessions = getLocalStorageData('sessions');
    const session = { date: sessionDate, subject: sessionSubject, duration: sessionDuration };
    sessions.push(session);
    setLocalStorageData('sessions', sessions);
    displaySessions();
    clearForm();
  }
  
  // Display Sessions
  function displaySessions() {
    const sessions = getLocalStorageData('sessions');
    const sessionsTable = document.getElementById('sessionsTable');
    sessionsTable.innerHTML = sessions.map((session, index) => `
      <tr>
        <td>${session.date}</td>
        <td>${session.subject}</td>
        <td>${session.duration}</td>
        <td>
          <button class="btn btn-info btn-sm" onclick="editSession(${index})">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-danger btn-sm" onclick="deleteSession(${index})">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    `).join('');
  }
  
  // Delete Session
  function deleteSession(index) {
    const sessions = getLocalStorageData('sessions');
    sessions.splice(index, 1);
    setLocalStorageData('sessions', sessions);
    displaySessions();
  }
  
  // Edit Session
  function editSession(index) {
    const sessions = getLocalStorageData('sessions');
    const session = sessions[index];
    document.getElementById('sessionDate').value = session.date;
    document.getElementById('sessionSubject').value = session.subject;
    document.getElementById('sessionDuration').value = session.duration;
    document.getElementById('addButton').textContent = "Update Session";
    document.getElementById('addButton').onclick = () => updateSession(index);
  }
  
  // Update Session
  function updateSession(index) {
    const sessions = getLocalStorageData('sessions');
    const sessionDate = document.getElementById('sessionDate').value;
    const sessionSubject = document.getElementById('sessionSubject').value;
    const sessionDuration = document.getElementById('sessionDuration').value;
  
    if (!sessionDate || !sessionSubject || !sessionDuration) {
      alert("All fields are required!");
      return;
    }
  
    sessions[index] = { date: sessionDate, subject: sessionSubject, duration: sessionDuration };
    setLocalStorageData('sessions', sessions);
    displaySessions();
    clearForm();
    document.getElementById('addButton').textContent = "Add Session";
    document.getElementById('addButton').onclick = addStudySession;
  }
  
  // Clear Form
  function clearForm() {
    document.getElementById('sessionDate').value = "";
    document.getElementById('sessionSubject').value = "";
    document.getElementById('sessionDuration').value = "";
  }
  
  // Initialize Sessions
  displaySessions();