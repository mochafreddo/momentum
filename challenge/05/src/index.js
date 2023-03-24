const body = document.body;
const h1 = document.createElement("h1");

body.style.backgroundColor = "#f1c40f";
h1.textContent = "Hello!";
h1.style.color = "#ecf0f1";
body.appendChild(h1);

window.addEventListener("resize", () => {
  const width = window.innerWidth;

  if (width >= 0.5 * window.screen.width) {
    body.style.backgroundColor = "#f1c40f";
  } else if (width >= 0.3 * window.screen.width) {
    body.style.backgroundColor = "#9b59b6";
  } else {
    body.style.backgroundColor = "#2980b9";
  }
});
