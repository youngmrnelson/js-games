"use strict";
////////////
// Navigation Menu JS
////////////
const navMenuBtn = document.querySelector('.btn-menu');

navMenuBtn.addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('hidden');
})

////////////
// Rock Paper Scissors Game
////////////
function getComputerChoice() {
    const cpuChoices = ['rock', 'paper', 'scissors'];
    return cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
}

console.log(getComputerChoice());