    let isDarkMode = false;
    let resultCalculated = false;

        function toggleMode() {
            isDarkMode = !isDarkMode;
            const calculator = document.getElementById('calculator');
            const toggleButton = document.getElementById('toggleMode');
            if (isDarkMode) {
                calculator.classList.add('dark');
                toggleButton.textContent = "Switch to Light Mode";
            } else {
                calculator.classList.remove('dark');
                toggleButton.textContent = "Switch to Dark Mode";
            }
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
            resultCalculated = false; 
        }

        function deleteLast() {
            const display = document.getElementById('display');
            display.value = display.value.slice(0, -1);
        }

        function appendToDisplay(value) {
            const display = document.getElementById('display');
            if (resultCalculated) {
                display.value = '';  
                resultCalculated = false;
            }
            display.value += value;
        }

        function calculateResult() {
            const display = document.getElementById('display');
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
            resultCalculated = true; 
        }

        function calculateSquareRoot() {
            const display = document.getElementById('display');
            display.value = Math.sqrt(parseFloat(display.value)).toFixed(2);
        }

        function calculatePercentage() {
            const display = document.getElementById('display');
            let value = parseFloat(display.value);
    
            if (!isNaN(value)) {
            display.value = (value / 100).toFixed(2);
            } 
            else {
            display.value = 'Error'; 
            }
        }