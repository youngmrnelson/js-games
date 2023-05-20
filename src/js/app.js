class App {
  #game = document.getElementById('game');

  // Navigation Menu
  navMenuBtn = document.querySelector('.btn-menu');
  navLinksEl = document.querySelector('.nav-links');

  constructor() {
    // Event Listeners
    this.navMenuBtn.addEventListener('click', this.#toggleMenu.bind(this));
  }

  // Navigation Menu Functions
  #toggleMenu() {
    this.navLinksEl.classList.toggle('hidden');
  }
}

export default new App();
