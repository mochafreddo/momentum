const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', play);

// Main function to handle the game logic when the user clicks the 'Play!' button.
function play(event) {
  event.preventDefault();

  const rangeInput = document.querySelector('#rangeInput');
  const guessInput = document.querySelector('#guessInput');
  const chosen = document.querySelector('#chosen');
  const result = document.querySelector('#result');

  const range = parseInt(rangeInput.value, 10);

  if (!isValidRange(range)) {
    alert('Range cannot include negative numbers or zero.');
    return;
  }

  const randomNumber = getRandomNumber(range);
  const guess = parseInt(guessInput.value, 10);

  if (!isValidGuess(guess, range)) {
    result.innerHTML = 'Please enter a valid number.';
    return;
  }

  displayResults(chosen, result, guess, randomNumber);
}

// Check if the input range is valid (greater than 0 and not NaN).
function isValidRange(range) {
  return !isNaN(range) && range > 0;
}

// Generate a random number between 0 (inclusive) and the specified range (inclusive).
function getRandomNumber(range) {
  return Math.floor(Math.random() * (range + 1));
}

// Check if the input guess is valid (within the specified range and not NaN).
function isValidGuess(guess, range) {
  return !isNaN(guess) && guess >= 0 && guess <= range;
}

// Display the results of the game, showing the user's guess, the machine's random number, and the game outcome.
function displayResults(chosen, result, guess, randomNumber) {
  chosen.innerHTML = `You chose: ${guess}, the machine chose: ${randomNumber}.`;

  if (guess === randomNumber) {
    result.innerHTML = 'Tie Game!';
    result.className = 'tie';
  } else if (guess < randomNumber) {
    result.innerHTML = 'You lost!';
    result.className = 'lose';
  } else {
    result.innerHTML = 'You win!';
    result.className = 'win';
  }
}
