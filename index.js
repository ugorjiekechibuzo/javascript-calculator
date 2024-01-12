
const display = document.querySelector('#display');

function appendDisplay(input) {
 display.value = display.value + input;

}

function clearDisplay() {
 display.value = '';
}

function calculate() {
 display.value = eval(display.value);
}

function percentageDisplay() {
 display.value = display.value / 100;
}
