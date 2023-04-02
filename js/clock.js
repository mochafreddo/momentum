// Select the clock element from the DOM
const clock = document.querySelector('h1#clock');

// Define a function to update the clock
function updateClock() {
  // Get the current date and time
  const now = new Date();

  // Extract the hours, minutes, and seconds from the date object
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Update the clock element with the current time
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// Call the updateClock function once to initialize the clock
updateClock();

// Set an interval to call the updateClock function every second
setInterval(updateClock, 1000);
