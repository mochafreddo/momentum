const playBtn = document.querySelector("#play");

playBtn.addEventListener("click", play);

function play(event) {
  event.preventDefault();

  const rangeInput = document.querySelector("#rangeInput");
  const guessInput = document.querySelector("#guessInput");
  const chosen = document.querySelector("#chosen");
  const result = document.querySelector("#result");

  const range = parseInt(rangeInput.value, 10);

  if (!isValidRange(range)) {
    alert("Range cannot include negative numbers or zero.");
    return;
  }

  const randomNumber = getRandomNumber(range);

  const guess = parseInt(guessInput.value, 10);

  if (!isValidGuess(guess, range)) {
    result.innerHTML = "Please enter a valid number.";
    return;
  }

  chosen.innerHTML = `You chose: ${guess}, the machine chose: ${randomNumber}.`;

  if (guess === randomNumber) {
    result.innerHTML = "Tie Game!";
  } else if (guess < randomNumber) {
    result.innerHTML = "You lost!";
  } else {
    result.innerHTML = "You win!";
  }
}

function isValidRange(range) {
  return !isNaN(range) && range > 0;
}

function getRandomNumber(range) {
  return Math.ceil(Math.random() * range);
}

function isValidGuess(guess, range) {
  return !isNaN(guess) && guess >= 0 && guess <= range;
}
