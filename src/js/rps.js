'use strict';

/// /////////
// Rock Paper Scissors Game - Global Variables
/// /////////

// DOM Variables
const gameStartBtn = document.querySelector('.btn-game');
const roundNumberEl = document.querySelector('.round-number');
const playerScoreEl = document.querySelector('.player-score');
const playerChoiceEl = document.querySelector('.player-choice');
const cpuScoreEl = document.querySelector('.cpu-score');
const cpuChoiceEl = document.querySelector('.cpu-choice');
const gameMessage = document.querySelector('.game-message');
const rpsChoicesContainer = document.querySelector('.rps-choices');
const rockBtn = document.querySelector('.btn-rps-rock');
const paperBtn = document.querySelector('.btn-rps-paper');
const scissorsBtn = document.querySelector('.btn-rps-scissors');

// Game Variables
let roundNumber = 0;
let playerScore = 0;
let cpuScore = 0;
const winningScore = 5;

/// /////////
// Rock Paper Scissors Game - Game Functions
/// /////////

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

function startGame() {
  gameStartBtn.style.display = 'none';
  gameMessage.textContent = '';
  displayGameHeader();
  nobodyWinsGame();
  resetGameScores();
  displayGameScores();
  displayGameButtons();
}

function endGame() {
  gameStartBtn.style.display = 'block';
  displayGameHeader();
  displayGameButtons();
}

function updateGameRound() {
  roundNumber++;
  roundNumberEl.textContent = roundNumber;
}

function playerWinsRound() {
  playerScore++;
  playerScoreEl.textContent = playerScore;
  gameMessage.textContent = 'You won!';
}

function cpuWinsRound() {
  cpuScore++;
  cpuScoreEl.textContent = cpuScore;
  gameMessage.textContent = 'You lost...';
}

function updatePlayerChoices(playerSelection, computerSelection) {
  playerChoiceEl.textContent = playerSelection.toUpperCase();
  cpuChoiceEl.textContent = computerSelection.toUpperCase();
}

function playerWinsGame() {
  playerScoreEl.classList.add('p-win');
  playerChoiceEl.classList.add('p-win');
  cpuScoreEl.classList.add('p-lose');
  cpuChoiceEl.classList.add('p-lose');
  endGame();
}

function cpuWinsGame() {
  playerScoreEl.classList.add('p-lose');
  playerChoiceEl.classList.add('p-lose');
  cpuScoreEl.classList.add('p-win');
  cpuChoiceEl.classList.add('p-win');
  endGame();
}

function nobodyWinsGame() {
  playerScoreEl.classList.remove('p-win');
  playerChoiceEl.classList.remove('p-win');
  cpuScoreEl.classList.remove('p-win');
  cpuChoiceEl.classList.remove('p-win');
  playerScoreEl.classList.remove('p-lose');
  playerChoiceEl.classList.remove('p-lose');
  cpuScoreEl.classList.remove('p-lose');
  cpuChoiceEl.classList.remove('p-lose');
}

function checkForWinner() {
  if (playerScore !== winningScore && cpuScore !== winningScore) {
    return;
  }
  if (playerScore === winningScore) {
    playerWinsGame();
  } else if (cpuScore === winningScore) {
    cpuWinsGame();
  }
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  updatePlayerChoices(playerSelection, computerSelection);

  if (playerSelection === computerSelection) {
    updateGameRound();
    gameMessage.textContent = "It's a draw.";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    updateGameRound();
    playerWinsRound();
    checkForWinner();
  } else {
    updateGameRound();
    cpuWinsRound();
    checkForWinner();
  }
}

function game(playerSelection) {
  playRound(playerSelection);
}

/// /////////
// Rock Paper Scissors Game -Event Listeners
/// /////////

gameStartBtn.addEventListener('click', startGame);

rockBtn.addEventListener('click', () => {
  game('rock');
});

paperBtn.addEventListener('click', () => {
  game('paper');
});

scissorsBtn.addEventListener('click', () => {
  game('scissors');
});
