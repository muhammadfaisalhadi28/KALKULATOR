function appendValue(value) {
    document.getElementById('screen').value += value;
}
function clearScreen() {
    document.getElementById('screen').value = '';
}
function deleteLast() {
    let screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}
function calculate() {
    try {
        let expression = document.getElementById('screen').value.replace(/\^/g, '**');
        document.getElementById('screen').value = eval(expression);
    } catch {
        alert("Input tidak valid");
    }
}
document.addEventListener("keydown", function(event) {
    let key = event.key;
    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%' || key === '^') {
        appendValue(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearScreen();
    }
});