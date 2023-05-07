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

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Rock, paper, scissors?', 'rock').toLowerCase();
    computerSelection = getComputerChoice();

    console.log(playerSelection, computerSelection);
}

function game() {
    for(let i = 0; i < 5; i++){
        playRound();
    }
}

game();