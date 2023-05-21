// RPS
export default class RockPaperScissors {
  // DOM Variables
  gameStartBtn = document.querySelector('.btn-game');
  roundNumberEl = document.querySelector('.round-number');
  playerScoreEl = document.querySelector('.player-score');
  playerChoiceEl = document.querySelector('.player-choice');
  cpuScoreEl = document.querySelector('.cpu-score');
  cpuChoiceEl = document.querySelector('.cpu-choice');
  gameMessage = document.querySelector('.game-message');
  rpsChoicesContainer = document.querySelector('.rps-choices');
  rockBtn = document.querySelector('.btn-rps-rock');
  paperBtn = document.querySelector('.btn-rps-paper');
  scissorsBtn = document.querySelector('.btn-rps-scissors');

  // Game Variables
  #roundNumber = 0;
  #playerScore = 0;
  #cpuScore = 0;
  #winningScore = 5;

  constructor() {
    // Event Listeners
    this.gameStartBtn.addEventListener('click', this.#startGame.bind(this));
    this.rockBtn.addEventListener('click', () => this.#playGame('rock'));
    this.paperBtn.addEventListener('click', () => this.#playGame('paper'));
    this.scissorsBtn.addEventListener('click', () => this.#playGame('scissors'));
  }

  #getComputerChoice() {
    const cpuChoices = ['rock', 'paper', 'scissors'];
    return cpuChoices[Math.floor(Math.random() * cpuChoices.length)]
  }

  #displayGameHeader() {
    const gameHeader = document.querySelector('.game-header');
    const gameText = document.querySelector('.game-text');
    gameHeader.classList.toggle('hidden');
    gameText.classList.toggle('hidden');
  }

  #resetGameScore() {
    this.#roundNumber = 0;
    this.#playerScore = 0;
    this.#cpuScore = 0;
    this.playerChoiceEl.innerHTML = '?';
    this.cpuChoiceEl.innerHTML = '?';
  }

  #displayGameScores() {
    this.roundNumberEl.textContent = this.#roundNumber;
    this.playerScoreEl.textContent = this.#playerScore;
    this.cpuScoreEl.textContent = this.#cpuScore;
  }

  #displayGameButtons() {
    this.rpsChoicesContainer.classList.toggle('hidden');
  }

  #startGame() {
    this.gameStartBtn.style.display = 'none';
    this.gameMessage.textContent = '';
    this.#displayGameHeader();
    this.#nobodyWinsGame();
    this.#resetGameScore();
    this.#displayGameScores();
    this.#displayGameButtons();
  }

  #endGame() {
    this.gameStartBtn.style.display = 'block';
    this.#displayGameHeader();
    this.#displayGameButtons();
  }

  #updateGameRound() {
    this.#roundNumber++;
    this.roundNumberEl.textContent = this.#roundNumber;
  }

  #playerWinsRound() {
    this.#playerScore++;
    this.playerScoreEl.textContent = this.#playerScore;
    this.gameMessage.textContent = 'You won!';
  }

  #cpuWinsRound() {
    this.#cpuScore++;
    this.cpuScoreEl.textContent = this.#cpuScore;
    this.gameMessage.textContent = 'You lost...';
  }

  #updatePlayerChoices(playerSelection, computerSelection) {
    this.playerChoiceEl.textContent = playerSelection.toUpperCase();
    this.cpuChoiceEl.textContent = computerSelection.toUpperCase();
  }

  #playerWinsGame() {
    this.playerScoreEl.classList.add('p-win');
    this.playerChoiceEl.classList.add('p-win');
    this.cpuScoreEl.classList.add('p-lose');
    this.cpuChoiceEl.classList.add('p-lose');
    this.#endGame();
  }

  #cpuWinsGame() {
    this.playerScoreEl.classList.add('p-lose');
    this.playerChoiceEl.classList.add('p-lose');
    this.cpuScoreEl.classList.add('p-win');
    this.cpuChoiceEl.classList.add('p-win');
    this.#endGame();
  }

  #nobodyWinsGame() {
    this.playerScoreEl.classList.remove('p-win');
    this.playerChoiceEl.classList.remove('p-win');
    this.cpuScoreEl.classList.remove('p-win');
    this.cpuChoiceEl.classList.remove('p-win');
    this.playerScoreEl.classList.remove('p-lose');
    this.playerChoiceEl.classList.remove('p-lose');
    this.cpuScoreEl.classList.remove('p-lose');
    this.cpuChoiceEl.classList.remove('p-lose');
  }

  #checkForWinner() {
    if (this.#playerScore !== this.#winningScore && this.#cpuScore !== this.#winningScore) {
      return;
    }
    if (this.#playerScore === this.#winningScore) {
      this.#playerWinsGame();
    } else if (this.#cpuScore === this.#winningScore) {
      this.#cpuWinsGame();
    }
  }

  #playRound(playerSelection) {
    const computerSelection = this.#getComputerChoice();
    this.#updatePlayerChoices(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
      this.#updateGameRound();
      this.gameMessage.textContent = "It's a draw.";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      this.#updateGameRound();
      this.#playerWinsRound();
      this.#checkForWinner();
    } else {
      this.#updateGameRound();
      this.#cpuWinsRound();
      this.#checkForWinner();
    }
  }

  #playGame(playerSelection) {
    this.#playRound(playerSelection);
  }
}
