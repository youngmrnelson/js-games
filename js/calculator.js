"use strict";

////////////
// Etch-a-Sketch - Global Variables
////////////

// DOM Variables
const calcInputDisplay = document.querySelector('.p-calc-display')
const calcInputResult = document.querySelector('.p-calc');
const calcBtns = document.querySelectorAll('.btn-calc');

// Calculator Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(add(1, 2));
console.log(subtract(3, 2));
console.log(multiply(3, 2));
console.log(divide(9, 3));