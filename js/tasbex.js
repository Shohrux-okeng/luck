let count = 0;
function ins() {
    const countElement = document.querySelector('.count');
    count++;
    countElement.textContent = count;
}

function reset() {
    const countElement = document.querySelector('.count');
    count = 0;
    countElement.textContent = count;
}
