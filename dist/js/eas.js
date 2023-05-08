"use strict";

////////////
// Etch-a-Sketch - Global Variables
////////////

// DOM Variables
const easContainer = document.querySelector('.container-eas');
const colorInput = document.getElementById('eas-color');
const rangeInput = document.getElementById('eas-range');

// Global Variables
let range = 1;

////////////
// Etch-a-Sketch - Functions
////////////
function createSquares(range) {
    for(let i = 0; i < range; i++) {
        const cell = document.createElement('div');
        cell.classList.add('eas-square');
        easContainer.appendChild(cell);
    }
    updateGrid(range);
}

function updateGrid(range) {
    easContainer.style.gridTemplateColumns = `repeat(${range}, 1fr)`;
    easContainer.style.gridTemplateRows = `repeat(${range}, 1fr)`;
}

createSquares(range);

rangeInput.addEventListener('change', () => {
    range = rangeInput.value;
    console.log(range);
})