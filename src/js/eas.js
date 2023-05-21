export default class EtchASketch {
  // DOM Variables
  easContainer = document.querySelector('.container-eas');
  easBtns = document.querySelectorAll('.btn-eas');
  colorInput = document.getElementById('eas-color');
  colorBtn = document.querySelector('.btn-eas-color');
  rainbowBtn = document.querySelector('.btn-eas-rainbow');
  eraserBtn = document.querySelector('.btn-eas-eraser');
  clearBtn = document.querySelector('.btn-eas-clear');
  rangeInput = document.getElementById('eas-range');
  rangeText = document.getElementById('eas-range-num');
  // Global Variables
  #range = 1;
  #colorValue = this.colorInput.value;
  rangeText = `${this.#range} x ${this.#range}`;

  constructor() {
    // Event Listeners
    this.#createSquares(this.#range);
    this.colorInput.addEventListener('change', this.#colorPicker.bind(this));
    this.colorBtn.addEventListener('click', this.#colorSquares.bind(this));
    this.rainbowBtn.addEventListener('click', this.#rainbowSquares.bind(this));
    this.eraserBtn.addEventListener('click', this.#eraseSquares.bind(this));
    this.clearBtn.addEventListener('click', this.#clearSquares.bind(this));
    this.easBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.easBtns.forEach((btn) => {
          btn.classList.remove('active')
        })
        btn.classList.add('active');
      })
    })
  }

  #createSquares(range) {
    for(let i = 0; i < range * range; i++) {
      const cell = document.createElement('div');
      cell.classList.add('eas-square');
      this.easContainer.appendChild(cell);
    }
    this.#updateGrid(range);
  }

  #removeSquares() {
    while(this.easContainer.firstChild) {
      this.easContainer.removeChild(this.easContainer.firstChild);
    }
  }

  #updateGrid(range) {
    this.easContainer.style.gridTemplateColumns = `repeat(${this.#range}, 1fr)`;
    this.easContainer.style.gridTemplateRows = `repeat(${this.#range}, 1fr)`;
  }

  #updateRange() {
    this.#removeSquares()
    this.#range = this.rangeInput.value;
    this.rangeText.textContent = `${this.#range} x ${this.#range}`;
    this.#createSquares(this.#range);
    this.#updateGrid(this.#range);
  }

  #clearSquares() {
    const squares = document.querySelectorAll('.eas-square');
    squares.forEach((square) => {
      square.style.backgroundColor = '#FFF';
    });
  }

  #colorPicker() {
    this.#colorValue = this.colorInput.value;
  }

  #colorSquares() {
    const squares = document.querySelectorAll('.eas-square');
    squares.forEach((square) =>
        square.addEventListener('mouseover', () => {
        square.style.backgroundColor = this.#colorValue;
      })
    );
  }

  #generateRainbow() {
    const [r, g, b] = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ];
    return `rgb(${r}, ${g}, ${b})`;
  }

  #rainbowSquares() {
      const squares = document.querySelectorAll('.eas-square');
      squares.forEach((square) =>
        square.addEventListener('mouseover', () => {
        square.style.backgroundColor = generateRainbow();
      })
    );
  }

  #eraseSquares() {
      const squares = document.querySelectorAll('.eas-square');
      squares.forEach((square) =>
        square.addEventListener('mouseover', () => {
        square.style.backgroundColor = '#FFF';
      })
    );
  }
}
