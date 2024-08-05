const decreaseBtn = document.getElementById('decreaseButton');
const increaseBtn = document.getElementById('increaseButton');
const resetBtn = document.getElementById('resetButton');
const countLabel = document.getElementById('countLabel')
let count = 0;


decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}