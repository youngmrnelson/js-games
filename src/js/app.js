import RockPaperScissors from './rps';

class App {
  #game = document.getElementById('game');
  // Navigation Menu
  navMenuBtn = document.querySelector('.btn-menu');
  navLinksEl = document.querySelector('.nav-links');

  // Loading SVG
  loadingSVG = document.getElementById('loading'); 

  // Game Buttons
  gameBtns = document.querySelectorAll('.game-btn');

  constructor() {
    // Event Listeners
    this.navMenuBtn.addEventListener('click', this.#toggleMenu.bind(this));
    this.gameBtns.forEach(btn => btn.addEventListener('click', this.#startGame.bind(this)));
    this.gameBtns.forEach(btn => btn.addEventListener('click', () => {
      if(btn.textContent === 'Rock Paper Scissors') {
        this.#createBoard('rps');
        return new RockPaperScissors();
      }
      if(btn.textContent === 'Etch a Sketch') {
        this.#createBoard('eas');
      }
      if(btn.textContent === 'Calculator') {
        this.#createBoard('calc');
      }
    }))
  }

  // Navigation Menu Functions
  #toggleMenu() {
    this.navLinksEl.classList.toggle('hidden');
  }

  #startGame() {
    while (this.#game.firstChild) {
        this.#game.removeChild(this.#game.firstChild);
    }
    // return new RockPaperScissors();
  }

  #loading() {
    this.loadingSVG.classList.remove('hidden');
    this.loadingSVG.classList.add('display-block');
    this.#game.appendChild(this.loadingSVG);
    setTimeout(() => {
        this.loadingSVG.classList.add('hidden');
        this.loadingSVG.classList.remove('display-block');
    }, 1500);
  }

  #createBoard(game) {
    if(game === 'rps') {
          const html = `<h2 class="h h-game mb-2">ROCK PAPER SCISSORS</h2>
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
      this.#game.className = '';
      this.#game.classList.add('my-4', 'flex', 'flex-fd--c', 'ai-c', 'jc-c', 'p-2', 'full-screen');
    }
    if(game === 'eas') {
      const html = `
        <h2 class="h h-game mb-2">ETCH-A-SKETCH</h2>
        <div
        class="eas-controls-container mb-2 flex flex-fd--c-mobile gap-2 ai-c"
        >
        <input type="color" id="eas-color" />
        <button class="btn btn-eas btn-eas-color p-2">Color Mode</button>
        <button class="btn btn-eas btn-eas-rainbow p-2">Rainbow Mode</button>
        <button class="btn btn-eas btn-eas-eraser p-2">Eraser</button>
        <button class="btn btn-eas btn-eas-clear p-2">Clear</button>
        <input type="range" id="eas-range" min="1" max="32" /><span
          id="eas-range-num"
        ></span>
      </div>
      <div class="container-eas eas-grid"></div>
      `;
      this.#game.insertAdjacentHTML('afterbegin', html);
      this.#game.className = '';
      this.#game.classList.add('my-4', 'flex', 'flex-fd--c', 'ai-c', 'jc-c', 'p-2');
    }
    if(game === 'calc') {
      const html = `
        <h2 class="h h-game mb-2">Calculator</h2>
        <div class="container container-calc grid grid-gc--4 gap-1 p-3">
        <!-- Calculator -->
        <div class="calc-display grid-col--full p-3">
          <p class="p-calc-display ta-r">0</p>
          <p class="p-calc ta-r">0</p>
        </div>
        <!-- Top Row -->
        <button class="btn btn-calc btn-calc-alt p-3 grid-s--3">AC</button>
        <button class="btn btn-calc btn-op p-3">/</button>
        <!-- Calc Row -->
        <button class="btn btn-calc btn-calc-num p-3">7</button>
        <button class="btn btn-calc btn-calc-num p-3">8</button>
        <button class="btn btn-calc btn-calc-num p-3">9</button>
        <button class="btn btn-calc btn-op p-3">*</button>
        <!-- Calc Row -->
        <button class="btn btn-calc btn-calc-num p-3">4</button>
        <button class="btn btn-calc btn-calc-num p-3">5</button>
        <button class="btn btn-calc btn-calc-num p-3">6</button>
        <button class="btn btn-calc btn-op p-3">-</button>
        <!-- Calc Row -->
        <button class="btn btn-calc btn-calc-num p-3">1</button>
        <button class="btn btn-calc btn-calc-num p-3">3</button>
        <button class="btn btn-calc btn-calc-num p-3">3</button>
        <button class="btn btn-calc btn-op p-3">+</button>
        <!-- Calc Row -->
        <button class="btn btn-calc btn-calc-num p-3 grid-s--3">0</button>
        <button class="btn btn-calc btn-op p-3">=</button>
      </div>
      `;
      this.#game.insertAdjacentHTML('afterbegin', html);
      this.#game.className = '';
      this.#game.classList.add('my-4', 'flex', 'flex-fd--c', 'ai-c', 'jc-c', 'p-2');    }
  }
}

export default new App();
