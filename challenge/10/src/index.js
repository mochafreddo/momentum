// Select the element that display the countdown clock
const clockTitle = document.querySelector('.js-clock');
const currentYear = new Date().getFullYear();
// Set the Christmas date for the current year
const CHRISTMAS_DAY = new Date(`December 25, ${currentYear}`);

// Define time conversion constants
const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

// Function to format time units with leading zeros (if needed)
function formatTimeUnit(timeUnit) {
  return timeUnit.toString().padStart(2, '0');
}

// Function to update the countdown clock
function updateClock() {
  // Get the current date and time
  const currentTime = new Date();
  // Calculate the time difference between Christmas and the current time
  const timeDifference = CHRISTMAS_DAY.getTime() - currentTime.getTime();

  // Calculate the remaining days, hours, minutes, and seconds
  const daysLeft = Math.floor(
    timeDifference /
      (MILLISECONDS_PER_SECOND *
        SECONDS_PER_MINUTE *
        MINUTES_PER_HOUR *
        HOURS_PER_DAY),
  );
  const hoursLeft = Math.floor(
    (timeDifference /
      (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR)) %
      HOURS_PER_DAY,
  );
  const minutesLeft = Math.floor(
    (timeDifference / (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE)) %
      MINUTES_PER_HOUR,
  );
  const secondsLeft = Math.floor(
    (timeDifference / MILLISECONDS_PER_SECOND) % SECONDS_PER_MINUTE,
  );

  // Format the remaining days, hours, minutes, and seconds with leading zeros (if needed)
  const formattedDaysLeft = formatTimeUnit(daysLeft);
  const formattedHoursLeft = formatTimeUnit(hoursLeft);
  const formattedMinutesLeft = formatTimeUnit(minutesLeft);
  const formattedSecondsLeft = formatTimeUnit(secondsLeft);

  // Update the counddown clock element's contect with the formatted remaining time
  clockTitle.innerHTML = `${formattedDaysLeft}d ${formattedHoursLeft}h ${formattedMinutesLeft}m ${formattedSecondsLeft}s`;
}

// Call the updateClock function to display the initial countdown time
updateClock();
// Set an interval to update the countdown clock every second
setInterval(updateClock, 1000);
