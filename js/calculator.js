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
let calcInputValue = 0;
let prevCalcInputValue = 0;

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
    }
}

calcNumberBtns.forEach(btn => {
    btn.addEventListener('click', () => console.log(btn))
})

calcAltBtns.forEach(btn => {
    btn.addEventListener('click', () => console.log(btn))
})

calcOpBtns.forEach(btn => {
    btn.addEventListener('click', () => console.log(btn))
})