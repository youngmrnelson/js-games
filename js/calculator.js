"use strict";

////////////
// Etch-a-Sketch - Global Variables
////////////

// DOM Variables
const calcInputDisplay = document.querySelector('.p-calc-display')
const calcInputResult = document.querySelector('.p-calc');
const calcNumberBtns = document.querySelectorAll('.btn-calc-num');
const calcAltBtns = document.querySelectorAll('.btn-calc-alt');
const calcOpBtns = document.querySelectorAll('.btn-op');

// Calculator Variables
let calcInputValue = 5;
let prevCalcInputValue = 5;

// Calculator Functions
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

calcNumberBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        console.log(e.target.textContent);
    })
})

calcAltBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        console.log(e.target.textContent);
    })
})

calcOpBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if(e.target.textContent === '+') {
            console.log(calcFunctions.add(calcInputValue, prevCalcInputValue))
        }
        if(e.target.textContent === '-') {
            console.log(calcFunctions.subtract(calcInputValue, prevCalcInputValue))
        }
        if(e.target.textContent === '/') {
            console.log(calcFunctions.divide(calcInputValue, prevCalcInputValue))
        }
        if(e.target.textContent === 'x') {
            console.log(calcFunctions.multiply(calcInputValue, prevCalcInputValue))
        }
    })
})