// Declare and initialize an array of image filenames
const imageFilenames = ['0.jpg', '1.jpg', '2.jpg'];

// Choose a random image filename from the array
const chosenImageFilename =
  imageFilenames[Math.floor(Math.random() * imageFilenames.length)];

// Create a new image element and set its source attribute to the chosen image
const backgroundImageElement = document.createElement('img');
backgroundImageElement.src = `img/${chosenImageFilename}`;

// Add the image element to the body of the document
document.body.appendChild(backgroundImageElement);
