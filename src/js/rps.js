class RockPaperScissors {
  #game = document.getElementById('game');
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
    this.#createBoard();
    // this.gameStartBtn.addEventListener('click', this.#startGame.bind(this));
    // this.rockBtn.addEventListener('click', function() { this.#playGame('rock').bind(this)});
    // this.paperBtn.addEventListener('click', function() { this.#playGame('paper').bind(this)});
    // this.scissorsBtn.addEventListener('click', function() { this.#playGame('scissors').bind(this)});
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
    this.displayGameButtons();
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
      gameMessage.textContent = "It's a draw.";
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

  #createBoard() {
    const html = ` <h2 class="h h-game mb-2">ROCK PAPER SCISSORS</h2>
      <div class="container-rps ta-c p-3 grid grid-gc--2">
        <button class="btn btn-game p-2 grid-col--full ps-c">Start Game</button>
        <p class="h h-game grid-col--full hidden game-header">
          Round #<span class="round-number">0</span>
        </p>
        <p class="p-game grid-col--full hidden game-text">Pick your weapon</p>
        <div class="p-scores player-scoreboard ps-c">
          <p class="p-game">Score: <span class="player-score">0</span></p>
          <p class="p-game">
            <i class="fa-solid fa-user i-game-player" aria-hidden="true"></i>
          </p>
          <p class="p-game">
            User
            <span class="player-choice">?</span>
          </p>
        </div>
        <div class="p-scores cpu-scoreboard ps-c">
          <p class="p-game">Score: <span class="cpu-score">0</span></p>
          <p class="p-game">
            <i
              class="fa-solid fa-user-astronaut i-game-player"
              aria-hidden="true"
            ></i>
          </p>
          <p class="p-game">
            <span class="cpu-choice">?</span>
            CPU
          </p>
        </div>
        <p class="p-game game-message grid-col--full"></p>
        <div
          class="m-auto rps-choices grid-col--full grid grid-gc--2 gap-3 my-3 hidden"
        >
          <button class="btn btn-rps gap-3 btn-rps-rock ps-c">
            <i
              class="fa-regular fa-hand-back-fist btn-rps-choice-icon mb-1"
              aria-hidden="true"
            ></i>
            <span class="h btn-rps-choice disp-block">ROCK</span>
          </button>
          <button class="btn btn-rps btn-rps-paper ps-c">
            <i
              class="fa-regular fa-hand btn-rps-choice-icon mb-1"
              aria-hidden="true"
            ></i>
            <span class="h btn-rps-choice disp-block">PAPER</span>
          </button>
          <button class="btn btn-rps btn-rps-scissors grid-col--full ps-c">
            <i
              class="fa-regular fa-hand-scissors btn-rps-choice-icon mb-1"
              aria-hidden="true"
            ></i>
            <span class="h btn-rps-choice disp-block">SCISSORS</span>
          </button>
        </div>
      </div>`;
    this.#game.insertAdjacentHTML('afterbegin', html);
  }
}

export default new RockPaperScissors();