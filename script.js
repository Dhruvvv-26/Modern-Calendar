let currentDisplay = '';
        
        function updateDisplay() {
            document.querySelector('#display').value = currentDisplay;
        }
        
        function calculate() {
            try {
                // Replace display symbols with operators
                let expression = currentDisplay
                    .replace('×', '*')
                    .replace('÷', '/')
                    .replace('−', '-');
                let result = eval(expression);
                currentDisplay = Number.isInteger(result) ? result.toString() : result.toFixed(2);
                updateDisplay();
            } catch (error) {
                currentDisplay = 'Error';
                updateDisplay();
                setTimeout(() => {
                    currentDisplay = '';
                    updateDisplay();
                }, 1000);
            }
        }
        
        updateDisplay();