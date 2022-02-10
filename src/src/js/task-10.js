function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputUl = document.querySelector('#controls > input');
const boxesUl = document.querySelector('div#boxes');
const createBtnUl = document.querySelector('[data-create]');
const destroyBtnUl = document.querySelector('[data-destroy]');

createBtnUl.addEventListener('click', () => {
  createBoxes(inputUl.value);
});

destroyBtnUl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let string = '';
  for (let i = 0; i < amount; i++) {
    string += createBox(i);
  }
  boxesUl.innerHTML = string;
}

function createBox(ratio) {
  return `<div style="background-color: ${getRandomHexColor()}; height: ${
    30 + 10 * ratio
  }px; width: ${30 + 10 * ratio}px"></div>`;
}

function destroyBoxes() {
  boxesUl.innerHTML = '';
  inputUl.value = '';
}