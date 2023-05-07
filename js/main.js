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

// DOM Variables
const gameStartBtn = document.querySelector('.btn-game');
const roundNumberEl = document.querySelector('.round-number');
const playerScoreEl = document.querySelector('.player-score');
const playerChoiceEl = document.querySelector('.player-choice');
const cpuScoreEl = document.querySelector('.cpu-score');
const cpuChoiceEl = document.querySelector('.cpu-choice');
const rpsChoicesContainer = document.querySelector('.rps-choices');
const rockBtn = document.querySelector('.btn-rps-rock');
const paperBtn = document.querySelector('.btn-rps-paper');
const scissorsBtn = document.querySelector('.btn-rps-scissors');

// Game Variables
let roundNumber = 0;
let playerScore = 0;
let cpuScore = 0;

// CPU Choice
function getComputerChoice() {
    const cpuChoices = ['rock', 'paper', 'scissors'];
    return cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
}

// Display Game Text
function displayGameHeader() {
    const gameHeader = document.querySelector('.game-header');
    const gameText = document.querySelector('.game-text');
    gameHeader.classList.toggle('hidden');
    gameText.classList.toggle('hidden');
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
    rpsChoicesContainer.classList.toggle('hidden');
}


gameStartBtn.addEventListener('click', startGame);

function startGame() {
    gameStartBtn.style.display = 'none';    
    displayGameHeader();
    resetGameScores();
    displayGameScores();
    displayGameButtons();
}

function endGame() {
    gameStartBtn.style.display = 'block';
    displayGameHeader();
    displayGameButtons();
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    console.log(playerSelection, computerSelection);

    if(playerSelection === computerSelection) {
        console.log('Tie');
    } else if(
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        console.log('You win!');
    } else {
        console.log('You lose...');
    }
}

function game(playerSelection) {
    playRound(playerSelection);
}

rockBtn.addEventListener('click', function() {
    game('rock');
});

paperBtn.addEventListener('click', function() {
    game('paper');
});

scissorsBtn.addEventListener('click', function() {
    game('scissors');
});