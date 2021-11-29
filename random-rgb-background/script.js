const body = document.body;
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

body.style.textAlign = "center";

button.addEventListener("click", () => {
  const color = generateColor();
  setColor(color);
});

function generateColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

const setColor = (newColor) => {
  body.style.backgroundColor = newColor;
  h1.innerText = newColor;
};
