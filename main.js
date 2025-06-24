let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display')

let currentInput = '';

buttons.forEach(button => (
  button.addEventListener('click', () => {
    let value = button.textContent.trim();

    if (!["AC", "⌫", "="].includes(value)) {
    if (currentInput.length >= 10) {
      let error = document.querySelector(".errorMessage");
      error.textContent = "Limit Hit"
      return;
    }
    currentInput += value;
    display.textContent = currentInput;
  }

    if (value === "AC") {
      currentInput = '';
      display.textContent = "0";
    }

    if (value === "⌫") {
      currentInput = currentInput.slice(0 ,-1);
      display.textContent = currentInput || "0";
    }


  })
))
