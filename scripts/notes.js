// Save Note
function saveNote() {
    const noteText = document.getElementById('noteTextarea').value.trim();
    if (noteText) {
      const note = { id: new Date().getTime(), text: noteText };
      const notes = getLocalStorageData('notes');
      notes.push(note);
      setLocalStorageData('notes', notes);
      displayNotes();
      document.getElementById('noteTextarea').value = "";
    }
  }
  
  // Display Notes
  function displayNotes() {
    const notes = getLocalStorageData('notes');
    const savedNotesContainer = document.getElementById('savedNotes');
    savedNotesContainer.innerHTML = notes.map(note => `
      <div class="card mb-3">
        <div class="card-body">
          <p class="card-text">${note.text}</p>
          <button class="btn btn-info btn-sm" onclick="editNote(${note.id})">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-danger btn-sm" onclick="deleteNote(${note.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `).join('');
  }
  
  // Delete Note
  function deleteNote(id) {
    const notes = getLocalStorageData('notes');
    const updatedNotes = notes.filter(note => note.id !== id);
    setLocalStorageData('notes', updatedNotes);
    displayNotes();
  }
  
  // Edit Note
  function editNote(id) {
    const notes = getLocalStorageData('notes');
    const note = notes.find(n => n.id === id);
    if (note) {
      document.getElementById('noteTextarea').value = note.text;
      document.getElementById('saveNoteBtn').textContent = "Update Note";
      document.getElementById('saveNoteBtn').onclick = () => updateNote(id);
    }
  }
  
  // Update Note
  function updateNote(id) {
    const notes = getLocalStorageData('notes');
    const updatedText = document.getElementById('noteTextarea').value.trim();
    if (updatedText) {
      const updatedNotes = notes.map(note => note.id === id ? { ...note, text: updatedText } : note);
      setLocalStorageData('notes', updatedNotes);
      displayNotes();
      document.getElementById('noteTextarea').value = "";
      document.getElementById('saveNoteBtn').textContent = "Save Note";
      document.getElementById('saveNoteBtn').onclick = saveNote;
    }
  }
  
  // Initialize Notes
  displayNotes();