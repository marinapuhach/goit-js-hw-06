document.querySelector('#name-input').addEventListener('input', (e) => {
    if(document.querySelector('#name-input') === ''){
        document.querySelector('#name-output').textContent = 'Anonymous';
    }
    else {
        document.querySelector('#name-output').textContent = e.currentTarget.value;
    };
})