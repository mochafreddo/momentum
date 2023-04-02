// Select the necessary elements from the DOM
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const mainWindow = document.querySelector('#main');

// Define constants for class names and local storage key
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

// Define a function to handle form submission
function onLoginSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Hide the login form
  loginForm.classList.add(HIDDEN_CLASSNAME);

  // Get the entered username from the input field
  const username = loginInput.value;

  // Store the username in local storage
  localStorage.setItem(USERNAME_KEY, username);

  // Display a greeting message to the user
  paintGreetings(username);
}

// Define a function to display a greeting message
function paintGreetings(username) {
  const now = new Date();
  const hour = now.getHours();

  let greetingMessage = '';

  if (hour >= 5 && hour < 12) {
    greetingMessage = `Good morning, ${username}.`;
  } else if (hour >= 12 && hour < 18) {
    greetingMessage = `Good afternoon, ${username}.`;
  } else {
    greetingMessage = `Good evening, ${username}.`;
  }

  greeting.innerText = greetingMessage;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  mainWindow.style.display = 'block';

  // Execute the navigator.geolocation.getCurrentPosition function
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

// Check if a username is saved in local storage
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // if no username is saved, show the login form and add a submit event listener
  mainWindow.style.display = 'none';
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  // if a username is saved, display a greeting message
  paintGreetings(savedUsername);
}
