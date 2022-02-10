const textSpan = document.querySelector('#text');
const input = document.querySelector('#font-size-control');

input.addEventListener('change', () => {
    textSpan.style.fontSize = input.value + 'px';
});