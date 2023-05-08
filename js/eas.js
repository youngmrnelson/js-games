"use strict";

////////////
// Etch-a-Sketch - Global Variables
////////////

// DOM Variables
const easContainer = document.querySelector('.container-eas');
const colorInput = document.getElementById('eas-color');
const colorBtn = document.querySelector('.btn-eas-color');
const rainbowBtn = document.querySelector('.btn-eas-rainbow');
const eraserBtn = document.querySelector('.btn-eas-eraser');
const clearBtn = document.querySelector('.btn-eas-clear');
const rangeInput = document.getElementById('eas-range');

// Global Variables
let range = 1;

////////////
// Etch-a-Sketch - Functions
////////////
function createSquares(range) {
    for(let i = 0; i < range * range; i++) {
        const cell = document.createElement('div');
        cell.classList.add('eas-square');
        easContainer.appendChild(cell);
    }
    updateGrid(range);
}

function removeSquares() {
    while(easContainer.firstChild) {
        easContainer.removeChild(easContainer.firstChild);
    }
}

function updateGrid(range) {
    easContainer.style.gridTemplateColumns = `repeat(${range}, 1fr)`;
    easContainer.style.gridTemplateRows = `repeat(${range}, 1fr)`;
}

createSquares(range);

rangeInput.addEventListener('change', () => {
    removeSquares();
    range = rangeInput.value;
    createSquares(range);
    updateGrid(range);
})

function clearSquares() {
    const squares = document.querySelectorAll('.eas-square');
    squares.forEach((square) => {
        square.style.backgroundColor = '#FFF';
    })
}
////////////
// Etch-a-Sketch - Event Listeners
////////////
clearBtn.addEventListener('click', clearSquares);