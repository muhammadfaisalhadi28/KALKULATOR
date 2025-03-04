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
        document.getElementById('screen').value = eval(document.getElementById('screen').value);
    } catch {
        alert("Input tidak valid");
    }
}