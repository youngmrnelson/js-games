"use strict";

////////////
// Calculator - Global Variables
////////////

// DOM Variables
const calcInputDisplay = document.querySelector('.p-calc-display')
const calcInputResult = document.querySelector('.p-calc');
const calcNumberBtns = document.querySelectorAll('.btn-calc-num');
const calcAltBtns = document.querySelectorAll('.btn-calc-alt');
const calcOpBtns = document.querySelectorAll('.btn-op');

// Calculator Variables
let calcInputValue = "";
let firstOperand;
let secondOperand;
let selectedOperator;

////////////
// Calculator - Functions
////////////
const calcFunctions = {
   add(a, b) {
        return a + b;
    }, 
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    },
}

// Display the updated operand value
function updateCalcDisplay() {
    calcInputDisplay.textContent = calcInputValue;
    calcInputValue = 0;
}

function updateOperand(operand) {
    selectedOperator = operand;
    calcInputDisplay.textContent = selectedOperator;
}

// Clear the display and reset all operands and operator
function clearCalculator() {
    calcInputValue = "";
    firstOperand = null;
    secondOperand = null;
    selectedOperator = null;
    calcInputDisplay.textContent = "0";
}


////////////
// Calculator - Event Listeners
////////////

// Calculator Numbers
calcNumberBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Check if an operator has already been selected
        if(!selectedOperator) {
            // If not, update the first operand
            firstOperand = parseFloat((firstOperand || "") + e.target.textContent);
            // Display the updated operand value
            calcInputValue = firstOperand.toString();
            updateCalcDisplay();
        } else {
            // If an operator has been selected, update the second operand
            secondOperand = parseFloat((secondOperand || "") + e.target.textContent);
            // Display the updated operand value
            calcInputValue = secondOperand.toString();
            updateCalcDisplay();
        }
    })
})

calcAltBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if(e.target.textContent === 'AC') {
            clearCalculator();
            calcInputResult.textContent = calcInputValue;
        }
    })
})

calcOpBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if(e.target.textContent === '+') {
            updateOperand('+');
        }
        if(e.target.textContent === '-') {
            updateOperand('-');
        }
        if(e.target.textContent === '/') {
            updateOperand('/');
        }
        if(e.target.textContent === '*') {
            updateOperand('*');
        }
        // Calculate the result when the equals button is clicked
        if(e.target.textContent === '=') {
            if(firstOperand && secondOperand && selectedOperator) {
                // Perfrom the calculation based on the selected operator
                let result;
                switch(selectedOperator) {
                    case "+":
                        result = calcFunctions.add(firstOperand, secondOperand);
                        break;
                    case "-":
                        result = calcFunctions.subtract(firstOperand, secondOperand);
                        break;
                    case "*":
                        result = calcFunctions.multiply(firstOperand, secondOperand);
                        break;
                    case "/":
                        result = calcFunctions.divide(firstOperand, secondOperand);
                        break;
                }
                // Display the result
                calcInputResult.textContent = result;
                // Reset the operands and operator
                clearCalculator();
            }
        }
    })
})