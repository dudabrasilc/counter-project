// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const decreaseButton = document.querySelector('.btn-decrease');
const increaseButton = document.querySelector('.btn-increase');
const resetButton = document.querySelector('.btn-reset');

decreaseButton.addEventListener('click', function() {
    //value.textContent = parseInt(value.textContent) - 1;
    console.log(value.textContent);
    value.textContent -= 1;
    if (value.textContent > 0 ) {
        value.style.color = "green";
    } else if (value.textContent < 0) {
        value.style.color = "red";
    } else if (value.textContent === 0) {
        value.style.color = "black";
    }
})

increaseButton.addEventListener('click', function() {
    value.textContent = parseInt(value.textContent) + 1;
    if (value.textContent > 0) {
        value.style.color = "green";
    } else if (value.textContent < 0) {
        value.style.color = "red";
    } else if (value.textContent === 0) {
        value.style.color = "black";
    }
})

resetButton.addEventListener('click', function() {
    value.textContent = 0;
    value.style.color = "black"; 
})

