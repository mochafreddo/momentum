/**
 * Challenge goals:
 * 1. The colors array is declared in the blueprint.
 * 2. When the user clicks the button, two colors should be randomly selected from the colors array.
 * 3. Change the style of the body tag to linear-gradient with two randomly selected colors.
 */

// Declare the colors array.
const colors = [
  '#ef5777',
  '#575fcf',
  '#4bcffa',
  '#34e7e4',
  '#0be881',
  '#f53b57',
  '#3c40c6',
  '#0fbcf9',
  '#00d8d6',
  '#05c46b',
  '#ffc048',
  '#ffdd59',
  '#ff5e57',
  '#d2dae2',
  '#485460',
  '#ffa801',
  '#ffd32a',
  '#ff3f34',
];

// Get the button element from the document.
const button = document.querySelector('button');

// Define a function to get a random color from the colors array.
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  colors.splice(randomIndex, 1); // Remove the selected color from the colors array.
  return randomColor;
}

// Add a click event listener to the button element.
button.addEventListener('click', () => {
  // Get two random colors from the colors array.
  const color1 = getRandomColor();
  const color2 = getRandomColor();

  // Add the two selected colors back to the colors array.
  colors.push(color1, color2);

  // Create a linear-gradient with the two selected colors and apply it to the background of the body element.
  const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
  document.body.style.background = gradient;
});
