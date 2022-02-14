const textSpan = document.querySelector('#text');
const input = document.querySelector('#font-size-control');

input.addEventListener('input', () => {
    textSpan.style.fontSize = input.value + 'px';
});