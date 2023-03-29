const clockTitle = document.querySelector(".js-clock");

const CHRISTMAS_DAY = new Date(`December 25, ${new Date().getFullYear()}`);

function updateClock() {
  const currentTime = new Date();
  const timeDifference = CHRISTMAS_DAY.getTime() - currentTime.getTime();

  const MILLISECONDS_PER_SECOND = 1000;
  const SECONDS_PER_MINUTE = 60;
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;

  const daysLeft = Math.floor(
    timeDifference /
      (MILLISECONDS_PER_SECOND *
        SECONDS_PER_MINUTE *
        MINUTES_PER_HOUR *
        HOURS_PER_DAY)
  );
  const hoursLeft = Math.floor(
    (timeDifference /
      (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR)) %
      HOURS_PER_DAY
  );
  const minutesLeft = Math.floor(
    (timeDifference / (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE)) %
      MINUTES_PER_HOUR
  );
  const secondsLeft = Math.floor(
    (timeDifference / MILLISECONDS_PER_SECOND) % SECONDS_PER_MINUTE
  );

  const TWO_DIGIT_NUMBER = 10;
  const HUNDRED_DIGIT_NUMBER = 100;

  const formattedDaysLeft =
    daysLeft < TWO_DIGIT_NUMBER
      ? `00${daysLeft}`
      : daysLeft < HUNDRED_DIGIT_NUMBER
      ? `0${daysLeft}`
      : daysLeft;
  const formattedHoursLeft =
    hoursLeft < TWO_DIGIT_NUMBER ? `0${hoursLeft}` : hoursLeft;
  const formattedMinutesLeft =
    minutesLeft < TWO_DIGIT_NUMBER ? `0${minutesLeft}` : minutesLeft;
  const formattedSecondsLeft =
    secondsLeft < TWO_DIGIT_NUMBER ? `0${secondsLeft}` : secondsLeft;

  clockTitle.innerHTML = `${formattedDaysLeft}d ${formattedHoursLeft}h ${formattedMinutesLeft}m ${formattedSecondsLeft}s`;
}

updateClock();
setInterval(updateClock, 1000);
