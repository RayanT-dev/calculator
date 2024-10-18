const display = document.getElementById("input")

function appendText(input) {
    display.value += input
}
function clearText() {
    display.value = ""

    
}
function calculate() {
    if (display.value === "") {
        display.value = "";
    } else {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Syntax Error";
        }
    }
    
    
}
function delLastChar() {
    display.value = display.value.slice(0, -1)
}

function calcPourcent() {
    let number = display.value / 100
    display.value = number
}