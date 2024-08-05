const textbox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelcius = document.getElementById('toCelcius');
const res = document.getElementById('res');


let temp;

function convert(event) {
    event.preventDefault();
    if(toFahrenheit.checked) {
        temp = (Number(textbox.value)) * 9 / 5 + 32;
        res.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelcius.checked) {
        temp = ((Number(textbox.value)) - 32) * (5/9);
        res.textContent = temp.toFixed(1) + "°C";
    }
    else {
        res.textContent = 'Select a unit.';
    }
}