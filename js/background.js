// Declare and initialize an array of image filenames
const imageFilenames = ['0.jpg', '1.jpg', '2.jpg'];

// Choose a random image filename from the array
const chosenImageFilename =
  imageFilenames[Math.floor(Math.random() * imageFilenames.length)];

// Create a new image element and set its source attribute to the chosen image
const backgroundImageElement = document.createElement('img');
backgroundImageElement.src = `img/${chosenImageFilename}`;

// Set CSS styles to make the image the background of the page
document.body.style.backgroundImage = `url(${backgroundImageElement.src})`;
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.opacity = '0.8';
