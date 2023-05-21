export default class Calculator {
  // DOM Variables
  calcInputDisplay = document.querySelector('.p-calc-display');
  calcInputResult = document.querySelector('.p-calc');
  calcNumberBtns = document.querySelectorAll('.btn-calc-num');
  calcAltBtns = document.querySelectorAll('.btn-calc-alt');
  calcOpBtns = document.querySelectorAll('.btn-op');
  // Global Variables
  calcInputValue = '';
  firstOperand;
  secondOperand;
  selectedOperator;

  constructor() {
    this.calcNumberBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // Check if an operator has already been selected
        if (!this.selectedOperator) {
          // If not, update the first operand
          this.firstOperand = parseFloat((this.firstOperand || '') + e.target.textContent);
          // Display the updated operand value
          this.calcInputValue = this.firstOperand.toString();
          this.#updateCalcDisplay();
        } else {
          // If an operator has been selected, update the second operand
          this.secondOperand = parseFloat((this.secondOperand || '') + e.target.textContent);
          // Display the updated operand value
          this.calcInputValue = this.secondOperand.toString();
          this.#updateCalcDisplay();
        }
      });
    });

    this.calcAltBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        if (e.target.textContent === 'AC') {
          this.#clearCalculator();
          this.calcInputResult.textContent = this.calcInputValue;
        }
      });
    });

    this.calcOpBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        if (e.target.textContent === '+') {
          this.#updateOperand('+');
        }
        if (e.target.textContent === '-') {
          this.#updateOperand('-');
        }
        if (e.target.textContent === '/') {
          this.#updateOperand('/');
        }
        if (e.target.textContent === '*') {
          this.#updateOperand('*');
        }
        // Calculate the result when the equals button is clicked
        if (e.target.textContent === '=') {
          if (this.firstOperand && this.secondOperand && this.selectedOperator) {
            // Perfrom the calculation based on the selected operator
            let result;
            switch (this.selectedOperator) {
              case '+':
                result = this.#add(this.firstOperand, this.secondOperand);
                break;
              case '-':
                result = this.#subtract(this.firstOperand, this.secondOperand);
                break;
              case '*':
                result = this.#multiply(this.firstOperand, this.secondOperand);
                break;
              case '/':
                result = this.#divide(this.firstOperand, this.secondOperand);
                break;
            }
            // Display the result
            this.calcInputResult.textContent = result;
            // Reset the operands and operator
            this.#clearCalculator();
          }
        }
      });
    });
  }

  #add(a, b) {
    return a + b;
  }

  #subtract(a, b) {
    return a - b;
  }

  #multiply(a, b) {
    return a * b;
  }

  #divide(a, b) {
    return a / b;
  }

  #updateCalcDisplay() {
    this.calcInputDisplay.textContent = this.calcInputValue;
    this.calcInputValue = 0;
  }

  #updateOperand(operand) {
    this.selectedOperator = operand;
    this.calcInputDisplay.textContent = this.selectedOperator;
  }

  #clearCalculator() {
    this.calcInputValue = '';
    this.firstOperand = null;
    this.secondOperand = null;
    this.selectedOperator = null;
    this.calcInputDisplay.textContent = '0';
  }
}