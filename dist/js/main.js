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

// game();

////////////
// Rock Paper Scissors Game
////////////

// DOM Variables
const gameStartBtn = document.querySelector('.btn-game');
const roundNumberEl = document.querySelector('.round-number');
const playerScoreEl = document.querySelector('.player-score');
const playerChoiceEl = document.querySelector('.player-choice');
const cpuScoreEl = document.querySelector('.cpu-score');
const cpuChoiceEl = document.querySelector('.cpu-choice');
const rpsChoicesContainer = document.querySelector('.rps-choices');

// Game Variables
let roundNumber = 0;
let playerScore = 0;
let cpuScore = 0;

// Display Game Text
function displayGameHeader() {
    const gameHeader = document.querySelector('.game-header');
    const gameText = document.querySelector('.game-text');
    gameHeader.classList.remove('hidden');
    gameText.classList.remove('hidden');
}

// Reset Game Round, Score, & Choices
function resetGameScores() {
    roundNumber = 0;
    playerScore = 0;
    cpuScore = 0;
    playerChoiceEl.innerHTML = '?';
    cpuChoiceEl.innerHTML = '?';
}

// Display Game Scores
function displayGameScores() {
    roundNumberEl.textContent = roundNumber;
    playerScoreEl.textContent = playerScore;
    cpuScoreEl.textContent = cpuScore;
}

// Display RPS Buttons
function displayGameButtons() {
    rpsChoicesContainer.classList.remove('hidden');
}


gameStartBtn.addEventListener('click', startGame);

function startGame() {
    gameStartBtn.style.display = 'none';    
    displayGameHeader();
    resetGameScores();
    displayGameScores();
    displayGameButtons();
}