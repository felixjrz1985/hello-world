const display = document.getElementById('display');

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Replace function names with Math equivalents
        const expr = display.value
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/tan\(/g, 'Math.tan(')
            .replace(/log\(/g, 'Math.log(')
            .replace(/sqrt\(/g, 'Math.sqrt(')
            .replace(/pow\(/g, 'Math.pow(')
            .replace(/pi/g, 'Math.PI')
            .replace(/e/g, 'Math.E');
        display.value = eval(expr);
    } catch (e) {
        display.value = 'Error';
    }
}
