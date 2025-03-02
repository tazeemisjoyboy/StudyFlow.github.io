// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  }
  
  // Load Dark Mode
  function loadDarkMode() {
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  }
  
  // Helper Functions for Local Storage
  function getLocalStorageData(key, defaultValue = []) {
    try {
      return JSON.parse(localStorage.getItem(key)) || defaultValue;
    } catch (e) {
      console.error(`Error retrieving data for ${key}:`, e);
      return defaultValue;
    }
  }
  
  function setLocalStorageData(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(`Error saving data for ${key}:`, e);
    }
  }
  
  // Initialize Dark Mode
  loadDarkMode();
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);