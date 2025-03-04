let lastKey = "";
        function appendValue(value) {
            let screen = document.getElementById('screen');
            if (!(lastKey === value && /[+\-*/%^.]/.test(value))) {
                screen.value += value;
            }
            lastKey = value;
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
            if (/^[0-9.+\-*/%^]$/.test(key) && key !== lastKey) {
                appendValue(key);
            } else if (key === 'Enter') {
                calculate();
            } else if (key === 'Backspace') {
                deleteLast();
            } else if (key === 'Escape') {
                clearScreen();
            }
            lastKey = key;
        });