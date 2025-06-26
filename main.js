let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let currentInput = '';
let firstNumber = '';
let operator = '';

buttons.forEach(button => (
  button.addEventListener('click', () => {
    let value = button.textContent.trim();
    if (!["AC", "⌫", "="].includes(value)) {
      if (currentInput.length >= 10) {
        const error = document.querySelector(".errorMessage");
        error.textContent = "Limit: Only 10 digits allowed (up to billions).";
        return;
      }

      currentInput += value;
      display.textContent = currentInput;
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
  })
))
