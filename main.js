let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let currentInput = '';
let firstNumber = '';
let operator = '';

buttons.forEach(button => (
  button.addEventListener('click', () => {
    let value = button.textContent.trim();
    if (!["AC", "⌫", "=", "x", "+", "-", "÷", "%"].includes(value)) {
      if (currentInput.length >= 10) {
        const error = document.querySelector(".errorMessage");
        error.textContent = "Limit: Only 10 digits allowed (up to billions).";
        return;
      }

      currentInput += value;
      display.textContent = firstNumber + operator + currentInput;
    }

    if (value === "AC") {
      currentInput = '';
      display.textContent = "0";
      document.querySelector(".errorMessage").textContent = ""; 
    }

    if (value === "⌫") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
      document.querySelector(".errorMessage").textContent = "";
      }
    
    if (value === "%") {
      if (currentInput === '') return;
      currentInput = parseFloat(currentInput) / 100;
      display.textContent = currentInput;
    }

    if (["x", "+", "-", "÷"].includes(value)) {
      if (currentInput === '') return;
      firstNumber = parseFloat(currentInput);
      operator = value;
      display.textContent = currentInput + value;
      currentInput = '';
      return;
    }

    if (value === "=") {
      if (firstNumber === '' || currentInput === '' || operator === '') return;
      let secondNumber = parseFloat(currentInput);
      let result;


      switch (operator) {
        case "+":
          result = firstNumber + secondNumber;
          break;

        case "-":
          result = firstNumber - secondNumber;
          break;
        
        case "x":
          result = firstNumber * secondNumber;
          break;

        case "÷":
          if (secondNumber === 0) {
            result = "error";
            document.querySelector(".errorMessage").textContent = "Unable to divide by zero";
          } else {
            result = firstNumber / secondNumber;
            document.querySelector(".errorMessage").textContent = "";
          }
          break;
      }

      if (result.toString().length >= 10) {
      result =  result.toFixed(1);
    }

      display.textContent = result;
      currentInput = result.toString();
      firstNumber = '';
      operator = '';
    }
  }  
)))
