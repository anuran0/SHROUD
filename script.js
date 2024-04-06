// In-memory database to store user information
const users = [
    { username: 'your_username', password: 'your_password' }
  ];
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
  
    // Check if the username and password match an existing user
    const existingUser = users.find(user => user.username === usernameInput.value && user.password === passwordInput.value);
  
    if (existingUser) {
      // Login successful, redirect to the home page
      window.location.href = 'home.html';
    } else {
      errorMessage.textContent = 'Invalid username or password.';
    }
  });