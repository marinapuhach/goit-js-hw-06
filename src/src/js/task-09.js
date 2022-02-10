function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body")
const buttonEl = document.querySelector(".change-color")
const textColor = document.querySelector(".color")
buttonEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textColor.textContent = bodyEl.style.backgroundColor;
})
