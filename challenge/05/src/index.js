const COLORS = {
  HEADING: '#ecf0f1',
  BACKGROUND_YELLOW: '#f1c40f',
  BACKGROUND_PURPLE: '#9b59b6',
  BACKGROUND_BLUE: '#2980b9',
};

function createHeading() {
  const h1 = document.createElement('h1');
  h1.textContent = 'Hello!';
  h1.style.color = COLORS.HEADING;
  return h1;
}

function setBackgroundColor(width) {
  if (width >= 0.7 * window.screen.width) {
    return COLORS.BACKGROUND_YELLOW;
  } else if (width >= 0.4 * window.screen.width) {
    return COLORS.BACKGROUND_PURPLE;
  } else {
    return COLORS.BACKGROUND_BLUE;
  }
}

function updateBackgroundColor() {
  const width = window.innerWidth;
  document.body.style.backgroundColor = setBackgroundColor(width);
}

function initialize() {
  const body = document.body;
  const h1 = createHeading();

  body.style.backgroundColor = COLORS.BACKGROUND_YELLOW;
  body.appendChild(h1);

  window.addEventListener('resize', updateBackgroundColor);
}

initialize();
