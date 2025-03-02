// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA7Hvg-xeOwD2toyxWy0XiKHnDWlsygyfc",
    authDomain: "student-productivity-dashboard.firebaseapp.com",
    projectId: "student-productivity-dashboard",
    storageBucket: "student-productivity-dashboard.appspot.com",
    messagingSenderId: "373176247094",
    appId: "1:373176247094:web:a585fa11bf1ac2a587c997",
    measurementId: "G-JSZ0V9GBZ5"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Handle Registration
  async function handleRegister() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      showMainContent();
    } catch (error) {
      alert(error.message);
    }
  }
  
  // Handle Login
  async function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      showMainContent();
    } catch (error) {
      alert(error.message);
    }
  }
  
  // Handle Password Reset
  function resetPassword() {
    const email = document.getElementById('email').value;
    if (email) {
      auth.sendPasswordResetEmail(email)
        .then(() => alert("Password reset email sent!"))
        .catch((error) => alert(error.message));
    } else {
      alert("Please enter your email to reset the password.");
    }
  }
  
  // Handle Logout
  function logout() {
    auth.signOut().then(() => {
      window.location.href = "index.html"; // Redirect to login page
    }).catch((error) => console.error("Logout error:", error));
  }
  
  // Show Main Content After Login
  function showMainContent() {
    window.location.href = "dashboard.html"; // Redirect to dashboard
  }
  
  // Event Listener for Login Form
  document.getElementById('authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    handleLogin();
  });