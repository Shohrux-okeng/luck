const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');

let count = 0;

incrementButton.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
});

resetButton.addEventListener('click', () => {
    count = 0;
    countElement.textContent = count;
});
