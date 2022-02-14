let counterValue = 1;
const buttonMinusOne = document.querySelector('button[data-action="decrement"]');
const buttonPlusOne = document.querySelector('button[data-action="increment"]');

buttonMinusOne.addEventListener('click', () => {
    document.querySelector('#value').textContent = counterValue -= 1;
});

buttonPlusOne.addEventListener('click', () => {
    document.querySelector('#value').textContent = counterValue += 1;
});