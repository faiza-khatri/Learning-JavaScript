const display = document.getElementById('terms');

function appendToDisplay(term) {
    display.value += term;
}

function clearDisplay(){
    display.value = "";
}

function evaluateDisplay() {
    try {
        const res = eval(display.value);
        display.value = res;
    }
    catch(error) {
        display.value = "Error"
    }
}