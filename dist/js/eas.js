"use strict";

////////////
// Etch-a-Sketch - Global Variables
////////////

// DOM Variables
const easContainer = document.querySelector('.container-eas');
const easBtns = document.querySelectorAll('.btn-eas');
const colorInput = document.getElementById('eas-color');
const colorBtn = document.querySelector('.btn-eas-color');
const rainbowBtn = document.querySelector('.btn-eas-rainbow');
const eraserBtn = document.querySelector('.btn-eas-eraser');
const clearBtn = document.querySelector('.btn-eas-clear');
const rangeInput = document.getElementById('eas-range');
const rangeText = document.getElementById('eas-range-num');

// Global Variables
let range = 1;
let colorValue = colorInput.value;
rangeText.textContent = `${range} x ${range}`;

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
    rangeText.textContent = `${range} x ${range}`;
    createSquares(range);
    updateGrid(range);
})

function clearSquares() {
    const squares = document.querySelectorAll('.eas-square');
    squares.forEach((square) => {
        square.style.backgroundColor = '#FFF';
    })
}

function colorPicker() {
    colorValue = colorInput.value;
}

function colorSquares() {
    const squares = document.querySelectorAll('.eas-square');
    squares.forEach((square) => square.addEventListener('mouseover', function() {
        square.style.backgroundColor = colorValue;
    }))
}

function generateRainbow() {
    const [r, g, b] = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    return `rgb(${r}, ${g}, ${b})`;
}

function rainbowSquares() {
    const squares = document.querySelectorAll('.eas-square');
    squares.forEach((square) => square.addEventListener('mouseover', function() {
        square.style.backgroundColor = generateRainbow();
    }))
}

function eraseSquares() {
    const squares = document.querySelectorAll('.eas-square');
    squares.forEach((square) => square.addEventListener('mouseover', function() {
        square.style.backgroundColor = '#FFF';
    }))
}


////////////
// Etch-a-Sketch - Event Listeners
////////////
colorInput.addEventListener('change', colorPicker);
colorBtn.addEventListener('click', colorSquares);
rainbowBtn.addEventListener('click', rainbowSquares);
eraserBtn.addEventListener('click', eraseSquares);
clearBtn.addEventListener('click', clearSquares);
easBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        easBtns.forEach((btn) => {
            btn.classList.remove('active');
        })
        btn.classList.add('active');
    })
})
