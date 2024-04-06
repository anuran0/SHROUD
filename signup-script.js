// In-memory database to store user information
const users = [];

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const errorMessage = document.getElementById('error-message');

  // Check if the username already exists
  const existingUser = users.find(user => user.username === usernameInput.value);

  if (existingUser) {
    errorMessage.textContent = 'Username already exists. Please choose a different username.';
  } else {
    // Create a new user object and add it to the database
    const newUser = { username: usernameInput.value, email: emailInput.value, password: passwordInput.value };
    users.push(newUser);
    console.log('New user added:', newUser);

    // Redirect the user to the login page after successful signup
    window.location.href = 'abc.html';
  }
});