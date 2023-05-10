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
    calcInputValue = firstOperand.toString();
    calcInputDisplay.textContent = calcInputValue;
}

function updateOperand(operand) {
    selectedOperator = operand;
    calcInputDisplay.textContent = selectedOperator;
}

function clearCalculator() {
    // Clear the display and reset all operands and operator
    calcInputValue = "";
    firstOperand = null;
    secondOperand = null;
    selectedOperator = null;
    calcInputDisplay.textContent = "";
}


////////////
// Calculator - Event Listeners
////////////
calcNumberBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Check if an operator has already been selected
        if(!selectedOperator) {
            // If not, update the first operand
            firstOperand = parseFloat(calcInputValue + e.target.textContent);
            // Display the updated operand value
            updateCalcDisplay();
        } else {
            // If an operator has been selected, update the second operand
            secondOperand = parseFloat(calcInputValue + e.target.textContent);
            // Display the updated operand value
            updateCalcDisplay();
        }
    })
})

calcAltBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if(e.target.textContent === 'AC') {
            clearCalculator();
        }
    })
})

