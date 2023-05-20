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
  }

  // Navigation Menu Functions
  #toggleMenu() {
    this.navLinksEl.classList.toggle('hidden');
  }

  #test() {
    console.log('Hello');
  }

  #startGame() {
    while (this.#game.firstChild) {
        this.#game.removeChild(this.#game.firstChild);
    }
    this.#loading();
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
}

export default new App();
