/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rps */ "./src/js/rps.js");
/* harmony import */ var _eas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eas */ "./src/js/eas.js");
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator */ "./src/js/calculator.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



var _game = /*#__PURE__*/new WeakMap();
var _toggleMenu = /*#__PURE__*/new WeakSet();
var _startGame = /*#__PURE__*/new WeakSet();
var _loading = /*#__PURE__*/new WeakSet();
var _createBoard = /*#__PURE__*/new WeakSet();
var App = /*#__PURE__*/_createClass(function App() {
  var _this = this;
  _classCallCheck(this, App);
  _classPrivateMethodInitSpec(this, _createBoard);
  _classPrivateMethodInitSpec(this, _loading);
  _classPrivateMethodInitSpec(this, _startGame);
  // Navigation Menu Functions
  _classPrivateMethodInitSpec(this, _toggleMenu);
  _classPrivateFieldInitSpec(this, _game, {
    writable: true,
    value: document.getElementById('game')
  });
  // Navigation Menu
  _defineProperty(this, "navMenuBtn", document.querySelector('.btn-menu'));
  _defineProperty(this, "navLinksEl", document.querySelector('.nav-links'));
  // Loading SVG
  _defineProperty(this, "loadingSVG", document.getElementById('loading'));
  // Game Buttons
  _defineProperty(this, "gameBtns", document.querySelectorAll('.game-btn'));
  // Event Listeners
  this.navMenuBtn.addEventListener('click', _classPrivateMethodGet(this, _toggleMenu, _toggleMenu2).bind(this));
  this.gameBtns.forEach(function (btn) {
    return btn.addEventListener('click', _classPrivateMethodGet(_this, _startGame, _startGame2).bind(_this));
  });
  this.gameBtns.forEach(function (btn) {
    return btn.addEventListener('click', function () {
      if (btn.textContent === 'Rock Paper Scissors') {
        _classPrivateMethodGet(_this, _createBoard, _createBoard2).call(_this, 'rps');
        return new _rps__WEBPACK_IMPORTED_MODULE_0__["default"]();
      }
      if (btn.textContent === 'Etch a Sketch') {
        _classPrivateMethodGet(_this, _createBoard, _createBoard2).call(_this, 'eas');
        return new _eas__WEBPACK_IMPORTED_MODULE_1__["default"]();
      }
      if (btn.textContent === 'Calculator') {
        _classPrivateMethodGet(_this, _createBoard, _createBoard2).call(_this, 'calc');
        return new _calculator__WEBPACK_IMPORTED_MODULE_2__["default"]();
      }
    });
  });
});
function _toggleMenu2() {
  this.navLinksEl.classList.toggle('hidden');
}
function _startGame2() {
  while (_classPrivateFieldGet(this, _game).firstChild) {
    _classPrivateFieldGet(this, _game).removeChild(_classPrivateFieldGet(this, _game).firstChild);
  }
  // return new RockPaperScissors();
}
function _loading2() {
  var _this2 = this;
  this.loadingSVG.classList.remove('hidden');
  this.loadingSVG.classList.add('display-block');
  _classPrivateFieldGet(this, _game).appendChild(this.loadingSVG);
  setTimeout(function () {
    _this2.loadingSVG.classList.add('hidden');
    _this2.loadingSVG.classList.remove('display-block');
  }, 1500);
}
function _createBoard2(game) {
  if (game === 'rps') {
    var html = "<h2 class=\"h h-game mb-2\">ROCK PAPER SCISSORS</h2>\n        <div class=\"container-rps ta-c p-3 grid grid-gc--2\">\n          <button class=\"btn btn-game p-2 grid-col--full ps-c\">Start Game</button>\n          <p class=\"h h-game grid-col--full hidden game-header\">\n            Round #<span class=\"round-number\">0</span>\n          </p>\n          <p class=\"p-game grid-col--full hidden game-text\">Pick your weapon</p>\n          <div class=\"p-scores player-scoreboard ps-c\">\n            <p class=\"p-game\">Score: <span class=\"player-score\">0</span></p>\n            <p class=\"p-game\">\n              <i class=\"fa-solid fa-user i-game-player\" aria-hidden=\"true\"></i>\n            </p>\n            <p class=\"p-game\">\n              User\n              <span class=\"player-choice\">?</span>\n            </p>\n          </div>\n          <div class=\"p-scores cpu-scoreboard ps-c\">\n            <p class=\"p-game\">Score: <span class=\"cpu-score\">0</span></p>\n            <p class=\"p-game\">\n              <i\n                class=\"fa-solid fa-user-astronaut i-game-player\"\n                aria-hidden=\"true\"\n              ></i>\n            </p>\n            <p class=\"p-game\">\n              <span class=\"cpu-choice\">?</span>\n              CPU\n            </p>\n          </div>\n          <p class=\"p-game game-message grid-col--full\"></p>\n          <div\n            class=\"m-auto rps-choices grid-col--full grid grid-gc--2 gap-3 my-3 hidden\"\n          >\n            <button class=\"btn btn-rps gap-3 btn-rps-rock ps-c\">\n              <i\n                class=\"fa-regular fa-hand-back-fist btn-rps-choice-icon mb-1\"\n                aria-hidden=\"true\"\n              ></i>\n              <span class=\"h btn-rps-choice disp-block\">ROCK</span>\n            </button>\n            <button class=\"btn btn-rps btn-rps-paper ps-c\">\n              <i\n                class=\"fa-regular fa-hand btn-rps-choice-icon mb-1\"\n                aria-hidden=\"true\"\n              ></i>\n              <span class=\"h btn-rps-choice disp-block\">PAPER</span>\n            </button>\n            <button class=\"btn btn-rps btn-rps-scissors grid-col--full ps-c\">\n              <i\n                class=\"fa-regular fa-hand-scissors btn-rps-choice-icon mb-1\"\n                aria-hidden=\"true\"\n              ></i>\n              <span class=\"h btn-rps-choice disp-block\">SCISSORS</span>\n            </button>\n          </div>\n        </div>";
    _classPrivateFieldGet(this, _game).insertAdjacentHTML('afterbegin', html);
    _classPrivateFieldGet(this, _game).className = '';
    _classPrivateFieldGet(this, _game).classList.add('my-4', 'flex', 'flex-fd--c', 'ai-c', 'jc-c', 'p-2', 'full-screen');
  }
  if (game === 'eas') {
    var _html = "\n        <h2 class=\"h h-game mb-2\">ETCH-A-SKETCH</h2>\n        <div\n        class=\"eas-controls-container mb-2 flex flex-fd--c-mobile gap-2 ai-c\"\n        >\n        <input type=\"color\" id=\"eas-color\" />\n        <button class=\"btn btn-eas btn-eas-color p-2\">Color Mode</button>\n        <button class=\"btn btn-eas btn-eas-rainbow p-2\">Rainbow Mode</button>\n        <button class=\"btn btn-eas btn-eas-eraser p-2\">Eraser</button>\n        <button class=\"btn btn-eas btn-eas-clear p-2\">Clear</button>\n        <input type=\"range\" id=\"eas-range\" min=\"1\" max=\"32\" /><span\n          id=\"eas-range-num\"\n        ></span>\n      </div>\n      <div class=\"container-eas eas-grid\"></div>\n      ";
    _classPrivateFieldGet(this, _game).insertAdjacentHTML('afterbegin', _html);
    _classPrivateFieldGet(this, _game).className = '';
    _classPrivateFieldGet(this, _game).classList.add('my-4', 'flex', 'flex-fd--c', 'ai-c', 'jc-c', 'p-2');
  }
  if (game === 'calc') {
    var _html2 = "\n        <h2 class=\"h h-game mb-2\">Calculator</h2>\n        <div class=\"container container-calc grid grid-gc--4 gap-1 p-3\">\n        <!-- Calculator -->\n        <div class=\"calc-display grid-col--full p-3\">\n          <p class=\"p-calc-display ta-r\">0</p>\n          <p class=\"p-calc ta-r\">0</p>\n        </div>\n        <!-- Top Row -->\n        <button class=\"btn btn-calc btn-calc-alt p-3 grid-s--3\">AC</button>\n        <button class=\"btn btn-calc btn-op p-3\">/</button>\n        <!-- Calc Row -->\n        <button class=\"btn btn-calc btn-calc-num p-3\">7</button>\n        <button class=\"btn btn-calc btn-calc-num p-3\">8</button>\n        <button class=\"btn btn-calc btn-calc-num p-3\">9</button>\n        <button class=\"btn btn-calc btn-op p-3\">*</button>\n        <!-- Calc Row -->\n        <button class=\"btn btn-calc btn-calc-num p-3\">4</button>\n        <button class=\"btn btn-calc btn-calc-num p-3\">5</button>\n        <button class=\"btn btn-calc btn-calc-num p-3\">6</button>\n        <button class=\"btn btn-calc btn-op p-3\">-</button>\n        <!-- Calc Row -->\n        <button class=\"btn btn-calc btn-calc-num p-3\">1</button>\n        <button class=\"btn btn-calc btn-calc-num p-3\">3</button>\n        <button class=\"btn btn-calc btn-calc-num p-3\">3</button>\n        <button class=\"btn btn-calc btn-op p-3\">+</button>\n        <!-- Calc Row -->\n        <button class=\"btn btn-calc btn-calc-num p-3 grid-s--3\">0</button>\n        <button class=\"btn btn-calc btn-op p-3\">=</button>\n      </div>\n      ";
    _classPrivateFieldGet(this, _game).insertAdjacentHTML('afterbegin', _html2);
    _classPrivateFieldGet(this, _game).className = '';
    _classPrivateFieldGet(this, _game).classList.add('my-4', 'flex', 'flex-fd--c', 'ai-c', 'jc-c', 'p-2');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new App());

/***/ }),

/***/ "./src/js/calculator.js":
/*!******************************!*\
  !*** ./src/js/calculator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calculator)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _add = /*#__PURE__*/new WeakSet();
var _subtract = /*#__PURE__*/new WeakSet();
var _multiply = /*#__PURE__*/new WeakSet();
var _divide = /*#__PURE__*/new WeakSet();
var _updateCalcDisplay = /*#__PURE__*/new WeakSet();
var _updateOperand = /*#__PURE__*/new WeakSet();
var _clearCalculator = /*#__PURE__*/new WeakSet();
var Calculator = /*#__PURE__*/_createClass(function Calculator() {
  var _this = this;
  _classCallCheck(this, Calculator);
  _classPrivateMethodInitSpec(this, _clearCalculator);
  _classPrivateMethodInitSpec(this, _updateOperand);
  _classPrivateMethodInitSpec(this, _updateCalcDisplay);
  _classPrivateMethodInitSpec(this, _divide);
  _classPrivateMethodInitSpec(this, _multiply);
  _classPrivateMethodInitSpec(this, _subtract);
  _classPrivateMethodInitSpec(this, _add);
  // DOM Variables
  _defineProperty(this, "calcInputDisplay", document.querySelector('.p-calc-display'));
  _defineProperty(this, "calcInputResult", document.querySelector('.p-calc'));
  _defineProperty(this, "calcNumberBtns", document.querySelectorAll('.btn-calc-num'));
  _defineProperty(this, "calcAltBtns", document.querySelectorAll('.btn-calc-alt'));
  _defineProperty(this, "calcOpBtns", document.querySelectorAll('.btn-op'));
  // Global Variables
  _defineProperty(this, "calcInputValue", '');
  _defineProperty(this, "firstOperand", void 0);
  _defineProperty(this, "secondOperand", void 0);
  _defineProperty(this, "selectedOperator", void 0);
  this.calcNumberBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // Check if an operator has already been selected
      if (!_this.selectedOperator) {
        // If not, update the first operand
        _this.firstOperand = parseFloat((_this.firstOperand || '') + e.target.textContent);
        // Display the updated operand value
        _this.calcInputValue = _this.firstOperand.toString();
        _classPrivateMethodGet(_this, _updateCalcDisplay, _updateCalcDisplay2).call(_this);
      } else {
        // If an operator has been selected, update the second operand
        _this.secondOperand = parseFloat((_this.secondOperand || '') + e.target.textContent);
        // Display the updated operand value
        _this.calcInputValue = _this.secondOperand.toString();
        _classPrivateMethodGet(_this, _updateCalcDisplay, _updateCalcDisplay2).call(_this);
      }
    });
  });
  this.calcAltBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (e.target.textContent === 'AC') {
        _classPrivateMethodGet(_this, _clearCalculator, _clearCalculator2).call(_this);
        _this.calcInputResult.textContent = _this.calcInputValue;
      }
    });
  });
  this.calcOpBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (e.target.textContent === '+') {
        _classPrivateMethodGet(_this, _updateOperand, _updateOperand2).call(_this, '+');
      }
      if (e.target.textContent === '-') {
        _classPrivateMethodGet(_this, _updateOperand, _updateOperand2).call(_this, '-');
      }
      if (e.target.textContent === '/') {
        _classPrivateMethodGet(_this, _updateOperand, _updateOperand2).call(_this, '/');
      }
      if (e.target.textContent === '*') {
        _classPrivateMethodGet(_this, _updateOperand, _updateOperand2).call(_this, '*');
      }
      // Calculate the result when the equals button is clicked
      if (e.target.textContent === '=') {
        if (_this.firstOperand && _this.secondOperand && _this.selectedOperator) {
          // Perfrom the calculation based on the selected operator
          var result;
          switch (_this.selectedOperator) {
            case '+':
              result = _classPrivateMethodGet(_this, _add, _add2).call(_this, _this.firstOperand, _this.secondOperand);
              break;
            case '-':
              result = _classPrivateMethodGet(_this, _subtract, _subtract2).call(_this, _this.firstOperand, _this.secondOperand);
              break;
            case '*':
              result = _classPrivateMethodGet(_this, _multiply, _multiply2).call(_this, _this.firstOperand, _this.secondOperand);
              break;
            case '/':
              result = _classPrivateMethodGet(_this, _divide, _divide2).call(_this, _this.firstOperand, _this.secondOperand);
              break;
          }
          // Display the result
          _this.calcInputResult.textContent = result;
          // Reset the operands and operator
          _classPrivateMethodGet(_this, _clearCalculator, _clearCalculator2).call(_this);
        }
      }
    });
  });
});
function _add2(a, b) {
  return a + b;
}
function _subtract2(a, b) {
  return a - b;
}
function _multiply2(a, b) {
  return a * b;
}
function _divide2(a, b) {
  return a / b;
}
function _updateCalcDisplay2() {
  this.calcInputDisplay.textContent = this.calcInputValue;
  this.calcInputValue = 0;
}
function _updateOperand2(operand) {
  this.selectedOperator = operand;
  this.calcInputDisplay.textContent = this.selectedOperator;
}
function _clearCalculator2() {
  this.calcInputValue = '';
  this.firstOperand = null;
  this.secondOperand = null;
  this.selectedOperator = null;
  this.calcInputDisplay.textContent = '0';
}


/***/ }),

/***/ "./src/js/eas.js":
/*!***********************!*\
  !*** ./src/js/eas.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EtchASketch)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _range = /*#__PURE__*/new WeakMap();
var _colorValue = /*#__PURE__*/new WeakMap();
var _createSquares = /*#__PURE__*/new WeakSet();
var _removeSquares = /*#__PURE__*/new WeakSet();
var _updateGrid = /*#__PURE__*/new WeakSet();
var _updateRange = /*#__PURE__*/new WeakSet();
var _clearSquares = /*#__PURE__*/new WeakSet();
var _colorPicker = /*#__PURE__*/new WeakSet();
var _colorSquares = /*#__PURE__*/new WeakSet();
var _generateRainbow = /*#__PURE__*/new WeakSet();
var _rainbowSquares = /*#__PURE__*/new WeakSet();
var _eraseSquares = /*#__PURE__*/new WeakSet();
var EtchASketch = /*#__PURE__*/_createClass(function EtchASketch() {
  var _this = this;
  _classCallCheck(this, EtchASketch);
  _classPrivateMethodInitSpec(this, _eraseSquares);
  _classPrivateMethodInitSpec(this, _rainbowSquares);
  _classPrivateMethodInitSpec(this, _generateRainbow);
  _classPrivateMethodInitSpec(this, _colorSquares);
  _classPrivateMethodInitSpec(this, _colorPicker);
  _classPrivateMethodInitSpec(this, _clearSquares);
  _classPrivateMethodInitSpec(this, _updateRange);
  _classPrivateMethodInitSpec(this, _updateGrid);
  _classPrivateMethodInitSpec(this, _removeSquares);
  _classPrivateMethodInitSpec(this, _createSquares);
  // DOM Variables
  _defineProperty(this, "easContainer", document.querySelector('.container-eas'));
  _defineProperty(this, "easBtns", document.querySelectorAll('.btn-eas'));
  _defineProperty(this, "colorInput", document.getElementById('eas-color'));
  _defineProperty(this, "colorBtn", document.querySelector('.btn-eas-color'));
  _defineProperty(this, "rainbowBtn", document.querySelector('.btn-eas-rainbow'));
  _defineProperty(this, "eraserBtn", document.querySelector('.btn-eas-eraser'));
  _defineProperty(this, "clearBtn", document.querySelector('.btn-eas-clear'));
  _defineProperty(this, "rangeInput", document.getElementById('eas-range'));
  _defineProperty(this, "rangeText", document.getElementById('eas-range-num'));
  // Global Variables
  _classPrivateFieldInitSpec(this, _range, {
    writable: true,
    value: 1
  });
  _classPrivateFieldInitSpec(this, _colorValue, {
    writable: true,
    value: this.colorInput.value
  });
  // Event Listeners
  _classPrivateMethodGet(this, _createSquares, _createSquares2).call(this, _classPrivateFieldGet(this, _range));
  this.colorInput.addEventListener('change', _classPrivateMethodGet(this, _colorPicker, _colorPicker2).bind(this));
  this.colorBtn.addEventListener('click', _classPrivateMethodGet(this, _colorSquares, _colorSquares2).bind(this));
  this.rainbowBtn.addEventListener('click', _classPrivateMethodGet(this, _rainbowSquares, _rainbowSquares2).bind(this));
  this.eraserBtn.addEventListener('click', _classPrivateMethodGet(this, _eraseSquares, _eraseSquares2).bind(this));
  this.clearBtn.addEventListener('click', _classPrivateMethodGet(this, _clearSquares, _clearSquares2).bind(this));
  this.easBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      _this.easBtns.forEach(function (btn) {
        btn.classList.remove('active');
      });
      btn.classList.add('active');
    });
  });
  this.rangeInput.addEventListener('change', _classPrivateMethodGet(this, _updateRange, _updateRange2).bind(this));
});
function _createSquares2(range) {
  for (var i = 0; i < range * range; i++) {
    var cell = document.createElement('div');
    cell.classList.add('eas-square');
    this.easContainer.appendChild(cell);
  }
  _classPrivateMethodGet(this, _updateGrid, _updateGrid2).call(this, range);
}
function _removeSquares2() {
  while (this.easContainer.firstChild) {
    this.easContainer.removeChild(this.easContainer.firstChild);
  }
}
function _updateGrid2(range) {
  this.easContainer.style.gridTemplateColumns = "repeat(".concat(_classPrivateFieldGet(this, _range), ", 1fr)");
  this.easContainer.style.gridTemplateRows = "repeat(".concat(_classPrivateFieldGet(this, _range), ", 1fr)");
}
function _updateRange2() {
  _classPrivateMethodGet(this, _removeSquares, _removeSquares2).call(this);
  _classPrivateFieldSet(this, _range, this.rangeInput.value);
  this.rangeText.textContent = "".concat(_classPrivateFieldGet(this, _range), " x ").concat(_classPrivateFieldGet(this, _range));
  _classPrivateMethodGet(this, _createSquares, _createSquares2).call(this, _classPrivateFieldGet(this, _range));
  _classPrivateMethodGet(this, _updateGrid, _updateGrid2).call(this, _classPrivateFieldGet(this, _range));
}
function _clearSquares2() {
  var squares = document.querySelectorAll('.eas-square');
  squares.forEach(function (square) {
    square.style.backgroundColor = '#FFF';
  });
}
function _colorPicker2() {
  _classPrivateFieldSet(this, _colorValue, this.colorInput.value);
}
function _colorSquares2() {
  var _this2 = this;
  var squares = document.querySelectorAll('.eas-square');
  squares.forEach(function (square) {
    return square.addEventListener('mouseover', function () {
      square.style.backgroundColor = _classPrivateFieldGet(_this2, _colorValue);
    });
  });
}
function _generateRainbow2() {
  var _ref = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)],
    r = _ref[0],
    g = _ref[1],
    b = _ref[2];
  return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
}
function _rainbowSquares2() {
  var _this3 = this;
  var squares = document.querySelectorAll('.eas-square');
  squares.forEach(function (square) {
    return square.addEventListener('mouseover', function () {
      square.style.backgroundColor = _classPrivateMethodGet(_this3, _generateRainbow, _generateRainbow2).call(_this3);
    });
  });
}
function _eraseSquares2() {
  var squares = document.querySelectorAll('.eas-square');
  squares.forEach(function (square) {
    return square.addEventListener('mouseover', function () {
      square.style.backgroundColor = '#FFF';
    });
  });
}


/***/ }),

/***/ "./src/js/rps.js":
/*!***********************!*\
  !*** ./src/js/rps.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RockPaperScissors)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _roundNumber = /*#__PURE__*/new WeakMap();
var _playerScore = /*#__PURE__*/new WeakMap();
var _cpuScore = /*#__PURE__*/new WeakMap();
var _winningScore = /*#__PURE__*/new WeakMap();
var _getComputerChoice = /*#__PURE__*/new WeakSet();
var _displayGameHeader = /*#__PURE__*/new WeakSet();
var _resetGameScore = /*#__PURE__*/new WeakSet();
var _displayGameScores = /*#__PURE__*/new WeakSet();
var _displayGameButtons = /*#__PURE__*/new WeakSet();
var _startGame = /*#__PURE__*/new WeakSet();
var _endGame = /*#__PURE__*/new WeakSet();
var _updateGameRound = /*#__PURE__*/new WeakSet();
var _playerWinsRound = /*#__PURE__*/new WeakSet();
var _cpuWinsRound = /*#__PURE__*/new WeakSet();
var _updatePlayerChoices = /*#__PURE__*/new WeakSet();
var _playerWinsGame = /*#__PURE__*/new WeakSet();
var _cpuWinsGame = /*#__PURE__*/new WeakSet();
var _nobodyWinsGame = /*#__PURE__*/new WeakSet();
var _checkForWinner = /*#__PURE__*/new WeakSet();
var _playRound = /*#__PURE__*/new WeakSet();
var _playGame = /*#__PURE__*/new WeakSet();
// RPS
var RockPaperScissors = /*#__PURE__*/_createClass(function RockPaperScissors() {
  var _this = this;
  _classCallCheck(this, RockPaperScissors);
  _classPrivateMethodInitSpec(this, _playGame);
  _classPrivateMethodInitSpec(this, _playRound);
  _classPrivateMethodInitSpec(this, _checkForWinner);
  _classPrivateMethodInitSpec(this, _nobodyWinsGame);
  _classPrivateMethodInitSpec(this, _cpuWinsGame);
  _classPrivateMethodInitSpec(this, _playerWinsGame);
  _classPrivateMethodInitSpec(this, _updatePlayerChoices);
  _classPrivateMethodInitSpec(this, _cpuWinsRound);
  _classPrivateMethodInitSpec(this, _playerWinsRound);
  _classPrivateMethodInitSpec(this, _updateGameRound);
  _classPrivateMethodInitSpec(this, _endGame);
  _classPrivateMethodInitSpec(this, _startGame);
  _classPrivateMethodInitSpec(this, _displayGameButtons);
  _classPrivateMethodInitSpec(this, _displayGameScores);
  _classPrivateMethodInitSpec(this, _resetGameScore);
  _classPrivateMethodInitSpec(this, _displayGameHeader);
  _classPrivateMethodInitSpec(this, _getComputerChoice);
  // DOM Variables
  _defineProperty(this, "gameStartBtn", document.querySelector('.btn-game'));
  _defineProperty(this, "roundNumberEl", document.querySelector('.round-number'));
  _defineProperty(this, "playerScoreEl", document.querySelector('.player-score'));
  _defineProperty(this, "playerChoiceEl", document.querySelector('.player-choice'));
  _defineProperty(this, "cpuScoreEl", document.querySelector('.cpu-score'));
  _defineProperty(this, "cpuChoiceEl", document.querySelector('.cpu-choice'));
  _defineProperty(this, "gameMessage", document.querySelector('.game-message'));
  _defineProperty(this, "rpsChoicesContainer", document.querySelector('.rps-choices'));
  _defineProperty(this, "rockBtn", document.querySelector('.btn-rps-rock'));
  _defineProperty(this, "paperBtn", document.querySelector('.btn-rps-paper'));
  _defineProperty(this, "scissorsBtn", document.querySelector('.btn-rps-scissors'));
  // Game Variables
  _classPrivateFieldInitSpec(this, _roundNumber, {
    writable: true,
    value: 0
  });
  _classPrivateFieldInitSpec(this, _playerScore, {
    writable: true,
    value: 0
  });
  _classPrivateFieldInitSpec(this, _cpuScore, {
    writable: true,
    value: 0
  });
  _classPrivateFieldInitSpec(this, _winningScore, {
    writable: true,
    value: 5
  });
  // Event Listeners
  this.gameStartBtn.addEventListener('click', _classPrivateMethodGet(this, _startGame, _startGame2).bind(this));
  this.rockBtn.addEventListener('click', function () {
    return _classPrivateMethodGet(_this, _playGame, _playGame2).call(_this, 'rock');
  });
  this.paperBtn.addEventListener('click', function () {
    return _classPrivateMethodGet(_this, _playGame, _playGame2).call(_this, 'paper');
  });
  this.scissorsBtn.addEventListener('click', function () {
    return _classPrivateMethodGet(_this, _playGame, _playGame2).call(_this, 'scissors');
  });
});
function _getComputerChoice2() {
  var cpuChoices = ['rock', 'paper', 'scissors'];
  return cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
}
function _displayGameHeader2() {
  var gameHeader = document.querySelector('.game-header');
  var gameText = document.querySelector('.game-text');
  gameHeader.classList.toggle('hidden');
  gameText.classList.toggle('hidden');
}
function _resetGameScore2() {
  _classPrivateFieldSet(this, _roundNumber, 0);
  _classPrivateFieldSet(this, _playerScore, 0);
  _classPrivateFieldSet(this, _cpuScore, 0);
  this.playerChoiceEl.innerHTML = '?';
  this.cpuChoiceEl.innerHTML = '?';
}
function _displayGameScores2() {
  this.roundNumberEl.textContent = _classPrivateFieldGet(this, _roundNumber);
  this.playerScoreEl.textContent = _classPrivateFieldGet(this, _playerScore);
  this.cpuScoreEl.textContent = _classPrivateFieldGet(this, _cpuScore);
}
function _displayGameButtons2() {
  this.rpsChoicesContainer.classList.toggle('hidden');
}
function _startGame2() {
  this.gameStartBtn.style.display = 'none';
  this.gameMessage.textContent = '';
  _classPrivateMethodGet(this, _displayGameHeader, _displayGameHeader2).call(this);
  _classPrivateMethodGet(this, _nobodyWinsGame, _nobodyWinsGame2).call(this);
  _classPrivateMethodGet(this, _resetGameScore, _resetGameScore2).call(this);
  _classPrivateMethodGet(this, _displayGameScores, _displayGameScores2).call(this);
  _classPrivateMethodGet(this, _displayGameButtons, _displayGameButtons2).call(this);
}
function _endGame2() {
  this.gameStartBtn.style.display = 'block';
  _classPrivateMethodGet(this, _displayGameHeader, _displayGameHeader2).call(this);
  _classPrivateMethodGet(this, _displayGameButtons, _displayGameButtons2).call(this);
}
function _updateGameRound2() {
  var _this$roundNumber, _this$roundNumber2;
  _classPrivateFieldSet(this, _roundNumber, (_this$roundNumber = _classPrivateFieldGet(this, _roundNumber), _this$roundNumber2 = _this$roundNumber++, _this$roundNumber)), _this$roundNumber2;
  this.roundNumberEl.textContent = _classPrivateFieldGet(this, _roundNumber);
}
function _playerWinsRound2() {
  var _this$playerScore, _this$playerScore2;
  _classPrivateFieldSet(this, _playerScore, (_this$playerScore = _classPrivateFieldGet(this, _playerScore), _this$playerScore2 = _this$playerScore++, _this$playerScore)), _this$playerScore2;
  this.playerScoreEl.textContent = _classPrivateFieldGet(this, _playerScore);
  this.gameMessage.textContent = 'You won!';
}
function _cpuWinsRound2() {
  var _this$cpuScore, _this$cpuScore2;
  _classPrivateFieldSet(this, _cpuScore, (_this$cpuScore = _classPrivateFieldGet(this, _cpuScore), _this$cpuScore2 = _this$cpuScore++, _this$cpuScore)), _this$cpuScore2;
  this.cpuScoreEl.textContent = _classPrivateFieldGet(this, _cpuScore);
  this.gameMessage.textContent = 'You lost...';
}
function _updatePlayerChoices2(playerSelection, computerSelection) {
  this.playerChoiceEl.textContent = playerSelection.toUpperCase();
  this.cpuChoiceEl.textContent = computerSelection.toUpperCase();
}
function _playerWinsGame2() {
  this.playerScoreEl.classList.add('p-win');
  this.playerChoiceEl.classList.add('p-win');
  this.cpuScoreEl.classList.add('p-lose');
  this.cpuChoiceEl.classList.add('p-lose');
  _classPrivateMethodGet(this, _endGame, _endGame2).call(this);
}
function _cpuWinsGame2() {
  this.playerScoreEl.classList.add('p-lose');
  this.playerChoiceEl.classList.add('p-lose');
  this.cpuScoreEl.classList.add('p-win');
  this.cpuChoiceEl.classList.add('p-win');
  _classPrivateMethodGet(this, _endGame, _endGame2).call(this);
}
function _nobodyWinsGame2() {
  this.playerScoreEl.classList.remove('p-win');
  this.playerChoiceEl.classList.remove('p-win');
  this.cpuScoreEl.classList.remove('p-win');
  this.cpuChoiceEl.classList.remove('p-win');
  this.playerScoreEl.classList.remove('p-lose');
  this.playerChoiceEl.classList.remove('p-lose');
  this.cpuScoreEl.classList.remove('p-lose');
  this.cpuChoiceEl.classList.remove('p-lose');
}
function _checkForWinner2() {
  if (_classPrivateFieldGet(this, _playerScore) !== _classPrivateFieldGet(this, _winningScore) && _classPrivateFieldGet(this, _cpuScore) !== _classPrivateFieldGet(this, _winningScore)) {
    return;
  }
  if (_classPrivateFieldGet(this, _playerScore) === _classPrivateFieldGet(this, _winningScore)) {
    _classPrivateMethodGet(this, _playerWinsGame, _playerWinsGame2).call(this);
  } else if (_classPrivateFieldGet(this, _cpuScore) === _classPrivateFieldGet(this, _winningScore)) {
    _classPrivateMethodGet(this, _cpuWinsGame, _cpuWinsGame2).call(this);
  }
}
function _playRound2(playerSelection) {
  var computerSelection = _classPrivateMethodGet(this, _getComputerChoice, _getComputerChoice2).call(this);
  _classPrivateMethodGet(this, _updatePlayerChoices, _updatePlayerChoices2).call(this, playerSelection, computerSelection);
  if (playerSelection === computerSelection) {
    _classPrivateMethodGet(this, _updateGameRound, _updateGameRound2).call(this);
    this.gameMessage.textContent = "It's a draw.";
  } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
    _classPrivateMethodGet(this, _updateGameRound, _updateGameRound2).call(this);
    _classPrivateMethodGet(this, _playerWinsRound, _playerWinsRound2).call(this);
    _classPrivateMethodGet(this, _checkForWinner, _checkForWinner2).call(this);
  } else {
    _classPrivateMethodGet(this, _updateGameRound, _updateGameRound2).call(this);
    _classPrivateMethodGet(this, _cpuWinsRound, _cpuWinsRound2).call(this);
    _classPrivateMethodGet(this, _checkForWinner, _checkForWinner2).call(this);
  }
}
function _playGame2(playerSelection) {
  _classPrivateMethodGet(this, _playRound, _playRound2).call(this, playerSelection);
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/red-bg-animated.svg */ "./src/assets/images/red-bg-animated.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/green-bg-animated.svg */ "./src/assets/images/green-bg-animated.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/blue-bg-animated.svg */ "./src/assets/images/blue-bg-animated.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/gray-bg-animated.svg */ "./src/assets/images/gray-bg-animated.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nerko+One&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.flex {\n  display: flex;\n}\n.flex-fd--c {\n  flex-direction: column;\n}\n.flex-fd--c-mobile {\n  flex-direction: column;\n}\n@media (min-width: 767px) {\n  .flex-fd--c-mobile {\n    flex-direction: row;\n  }\n}\n.flex-w-w {\n  flex-wrap: wrap;\n}\n\n.grid {\n  display: grid;\n}\n.grid-gc--2 {\n  grid-template-columns: 1fr 1fr;\n}\n@media (min-width: 1024px) {\n  .grid-gc--2 {\n    grid-template-columns: auto auto;\n  }\n}\n.grid-gc--2-mobile {\n  grid-template-columns: 1fr;\n}\n@media (min-width: 767px) {\n  .grid-gc--2-mobile {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.grid-gc--3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n.grid-gc--4 {\n  grid-template-columns: repeat(4, 1fr);\n}\n.grid-col--full {\n  grid-column: 1/-1;\n}\n@media (min-width: 1024px) {\n  .grid-col--full-mobile {\n    grid-column: auto;\n  }\n}\n.grid-s--2 {\n  grid-column: 1/3;\n}\n.grid-s--3 {\n  grid-column: 1/4;\n}\n\n.f-1 {\n  flex: 1;\n}\n\n.jc-c {\n  justify-content: center;\n}\n.jc-sb {\n  justify-content: space-between;\n}\n\n.ai-c {\n  align-items: center;\n}\n\n.ps-c {\n  place-self: center;\n}\n.ps-c-e {\n  place-self: center end;\n}\n@media (min-width: 767px) {\n  .ps-c-e {\n    place-self: center;\n  }\n}\n\n.disp-block {\n  display: block;\n}\n\n:root {\n  --js-yellow: #facc15;\n  --white-gradient: radial-gradient(#eee, #fff);\n  --black: #030712;\n  --dark: #333;\n  --gray-light: #9ca3af;\n  --gray: #6b7280;\n  --gray-dark: #111827;\n  --red-light: #f87171;\n  --red: #b91c1c;\n  --red-dark: #7f1d1d;\n  --green-light: #a3e635;\n  --green: #4d7c0f;\n  --green-dark: #3f6212;\n  --blue-light: #60a5fa;\n  --blue: #1d4ed8;\n  --blue-dark: #1e40af;\n  --blue-gradient: linear-gradient(315deg, var(--blue) 0%, var(--blue-light) 100%);\n  --transition: all 0.25s;\n}\n\n.p-win {\n  color: var(--green);\n  font-weight: 600;\n}\n.p-lose {\n  color: var(--red);\n  font-weight: 600;\n}\n\n.container {\n  max-width: 1200px;\n}\n.container-rps {\n  height: 90%;\n  width: 90%;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n.container-eas, .container-tic-tac-toe {\n  height: 512px;\n  width: 512px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n.container-calc {\n  background: #333;\n}\n\n.img {\n  width: 400px;\n}\n\n.gap-1 {\n  gap: 8px;\n}\n.gap-2 {\n  gap: 16px;\n}\n.gap-3 {\n  gap: 24px;\n}\n\n.py-0 {\n  padding-block: 8px;\n}\n.py-1 {\n  padding-block: 24px;\n}\n.py-2 {\n  padding-block: 32px;\n}\n.py-3 {\n  padding-block: 44px;\n}\n.py-4 {\n  padding-block: 80px;\n}\n\n.pi-1 {\n  padding-inline: 8px;\n}\n.pi-2 {\n  padding-inline: 12px;\n}\n\n.pb-1 {\n  padding-bottom: 4px;\n}\n\n.p-0 {\n  padding: 4px;\n}\n.p-1 {\n  padding: 8px;\n}\n.p-2 {\n  padding: 12px;\n}\n.p-3 {\n  padding: 24px;\n}\n\n.my-1 {\n  margin-block: 12px;\n}\n.my-2 {\n  margin-block: 24px;\n}\n.my-3 {\n  margin-block: 36px;\n}\n.my-4 {\n  margin-block: 80px;\n}\n\n.mb-1 {\n  margin-bottom: 12px;\n}\n.mb-2 {\n  margin-bottom: 24px;\n}\n.mb-3 {\n  margin-bottom: 36px;\n}\n.mb-4 {\n  margin-bottom: 64px;\n}\n\n.ml-0 {\n  margin-left: 4px;\n}\n.ml-1 {\n  margin-left: 8px;\n}\n\n.mt-1 {\n  margin-top: 12px;\n}\n.mt-2 {\n  margin-top: 24px;\n}\n.mt-3 {\n  margin-top: 36px;\n}\n\n.m-auto {\n  margin-inline: auto;\n}\n\n.ta-c {\n  text-align: center;\n}\n.ta-r {\n  text-align: right;\n}\n\n.top-line {\n  border-top: 1px solid #ccc;\n}\n\n.bottom-line {\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n\n.hidden {\n  display: none;\n}\n@media (min-width: 1024px) {\n  .hidden-mobile {\n    display: flex;\n  }\n}\n\n.display-block {\n  display: block;\n}\n\n.full-screen {\n  max-height: 100vh;\n}\n\n.calc-display {\n  background: #fff;\n}\n\n.btn {\n  cursor: pointer;\n  display: inline-block;\n  border: 2px solid transparent;\n  border-radius: 10px;\n  color: var(--gray-9);\n  background: transparent;\n  font-size: 2rem;\n  transition: var(--transition);\n}\n.btn:active {\n  transform: scale(0.95);\n}\n@media (min-width: 1024px) {\n  .btn-menu {\n    display: none;\n  }\n}\n.btn-game {\n  background: var(--dark);\n  color: #fff;\n}\n.btn-game:hover {\n  background: #555;\n}\n.btn-rps {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n.btn-rps:hover {\n  transform: translateY(-2px);\n}\n.btn-rps-rock {\n  color: var(--red);\n}\n.btn-rps-rock:hover {\n  background: var(--red-light);\n}\n.btn-rps-rock:active {\n  background: var(--red-dark);\n}\n.btn-rps-paper {\n  color: var(--green);\n}\n.btn-rps-paper:hover {\n  background: var(--green-light);\n}\n.btn-rps-paper:active {\n  background: var(--green-dark);\n}\n.btn-rps-scissors {\n  color: var(--blue);\n}\n.btn-rps-scissors:hover {\n  background: var(--blue-light);\n}\n.btn-rps-scissors:active {\n  background: var(--blue-dark);\n}\n.btn-rps-choice {\n  font-size: 3.2rem;\n}\n.btn-rps-choice-icon {\n  font-size: 4.4rem;\n}\n.btn-eas {\n  border: 1px solid var(--dark);\n}\n.btn-eas.active {\n  background: var(--dark);\n  color: #fff;\n}\n.btn-calc {\n  background: #aaa;\n  color: #fff;\n}\n.btn-calc:hover {\n  filter: brightness(0.95);\n}\n.btn-calc-alt {\n  background: #eee;\n  color: #333;\n}\n.btn-op {\n  background: #f59f00;\n}\n.btn-cell {\n  background: #fff;\n  border: 2px solid #000;\n}\n.btn-cell:hover {\n  background: #eee;\n}\n\nbody {\n  color: var(--black);\n  font-size: 1.6rem;\n  font-family: \"Open Sans\", sans-serif;\n  line-height: 1.5;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n.a {\n  display: inline-block;\n  transition: var(--transition);\n}\n.a-main {\n  color: #333;\n}\n.a-logo, .a-nav-link {\n  text-transform: uppercase;\n  font-family: \"Nerko One\", cursive;\n}\n.a-logo {\n  background: #fff;\n  border-radius: 20px;\n  color: var(--gray);\n  font-size: 3.4rem;\n}\n.a-logo:hover {\n  color: var(--gray-light);\n}\n.a-nav-link {\n  font-size: 1.6rem;\n  color: #fff;\n  border-radius: 25px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000;\n}\n.a-nav-link:hover {\n  text-shadow: -1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff;\n  transform: translateY(-2px);\n}\n.a-nav-link:active {\n  transform: scale(0.95);\n}\n.a-nav-link:hover, .a-nav-link:active {\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n.a-nav-link-rps {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center/cover;\n}\n.a-nav-link-rps:hover {\n  color: var(--red-dark);\n}\n.a-nav-link-eas {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center/cover;\n}\n.a-nav-link-eas:hover {\n  color: var(--green-dark);\n}\n.a-nav-link-calc {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center center/cover;\n}\n.a-nav-link-calc:hover {\n  color: var(--blue-dark);\n}\n.a-nav-link-ext {\n  border-color: var(--black);\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center center/cover;\n}\n.a-nav-link-ext:hover {\n  color: var(--black);\n}\n\n.h {\n  font-family: \"Nerko One\", cursive;\n}\n.h-main {\n  font-size: 4rem;\n}\n.h-game {\n  font-size: 3rem;\n  color: var(--dark);\n}\n\n.p-main {\n  font-size: 1.8rem;\n}\n.p-choice {\n  font-size: 3.6rem;\n  font-family: \"Nerko One\", cursive;\n}\n.p-footer {\n  font-size: 1.4rem;\n}\n.p-game {\n  font-size: 2rem;\n  color: var(--dark);\n}\n.p-calc, .p-calc-display {\n  font-size: 2rem;\n}\n.p-calc-display {\n  font-style: italic;\n  color: #444;\n}\n\n.i-game-player {\n  font-size: 4rem;\n}\n.i-game-player-choice {\n  font-size: 3rem;\n}\n\n.img-preview {\n  display: none;\n}\n@media (min-width: 767px) {\n  .img-preview {\n    display: block;\n  }\n}\n\n.eas-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n}\n.eas-square {\n  cursor: pointer;\n  border: 1px solid var(--gray-light);\n  transition: var(--transition);\n}\n.eas-square:hover {\n  filter: brightness(0.75);\n}\n\n#eas-color {\n  appearance: none;\n  background-color: transparent;\n  width: 50px;\n  height: 50px;\n  border: none;\n  cursor: pointer;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  background-color: #ddd;\n}\n\nhtml {\n  font-size: 62.5%;\n}", "",{"version":3,"sources":["webpack://./src/scss/_reset.scss","webpack://./src/scss/main.scss","webpack://./src/scss/_layout.scss","webpack://./src/scss/_utilities.scss","webpack://./src/scss/_components.scss","webpack://./src/scss/_typography.scss","webpack://./src/scss/_eas.scss"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n","@use 'reset';\n@use 'layout';\n@use 'utilities';\n@use 'components';\n@use 'typography';\n@use 'eas';\n\nhtml {\n    font-size: 62.5%;\n}","// Flexbox Layouts\n.flex {\n    display: flex;\n\n    &-fd--c {\n        flex-direction: column;\n    }\n\n    // FD-C Mobile\n    &-fd--c-mobile {\n        flex-direction: column;\n\n        @media(min-width: 767px) {\n            flex-direction: row;\n        }\n    }\n\n    &-w-w {\n        flex-wrap: wrap;\n    }\n}\n\n// Grid Layouts\n.grid {\n    display: grid;\n\n    // 2 Col\n    &-gc--2 {\n        grid-template-columns: 1fr 1fr;\n\n        @media(min-width: 1024px) {\n            grid-template-columns: auto auto;\n        }\n\n        &-mobile {\n            grid-template-columns: 1fr;\n\n            @media(min-width: 767px) {\n                grid-template-columns: 1fr 1fr;\n            }\n        }\n    }\n\n    // 3 Col\n    &-gc--3 {\n        grid-template-columns: repeat(3, 1fr);\n    }\n\n    // 4 Col\n    &-gc--4 {\n        grid-template-columns: repeat(4, 1fr);\n    }\n\n    // Full\n    &-col--full {\n        grid-column: 1 / -1;\n\n      &-mobile {\n        @media(min-width: 1024px) {\n            grid-column: auto;\n        }\n      }\n    }\n\n    // Spans\n    &-s--2 {\n        grid-column: 1 / 3;\n    }\n\n    &-s--3 {\n        grid-column: 1 / 4;\n    }\n}\n\n// Flex\n.f {\n    &-1 {\n        flex: 1;\n    }\n}\n\n// Justify Content\n.jc {\n    &-c {\n        justify-content: center;\n    }\n\n    &-sb {\n        justify-content: space-between;\n    }\n}\n\n// Align Items\n.ai {\n    &-c {\n        align-items: center;\n    }\n}\n\n// Place Self\n.ps {\n    &-c {\n        place-self: center;\n    }\n\n    &-c-e {\n        place-self: center end;\n\n        @media(min-width: 767px) {\n            place-self: center;\n        }\n    }\n}\n\n// Display\n.disp {\n    &-block { display: block }\n}\n","// Variables\n:root {\n    --js-yellow: #facc15;\n    --white-gradient: radial-gradient(#eee, #fff);\n    --black: #030712;\n    --dark: #333;\n    --gray-light: #9ca3af;\n    --gray: #6b7280;\n    --gray-dark: #111827;\n    --red-light: #f87171;\n    --red: #b91c1c;\n    --red-dark: #7f1d1d;\n    --green-light: #a3e635;\n    --green: #4d7c0f;\n    --green-dark: #3f6212;\n    --blue-light: #60a5fa;\n    --blue: #1d4ed8;\n    --blue-dark: #1e40af;\n    --blue-gradient: linear-gradient(315deg, var(--blue) 0%, var(--blue-light) 100%);\n    --transition: all 0.25s;\n}\n\n// Colors\n.p {\n    &-win {\n        color: var(--green);\n        font-weight: 600;\n    }\n\n    &-lose {\n        color: var(--red);\n        font-weight: 600;\n    }\n}\n\n// Container\n.container {\n    max-width: 1200px;\n\n    &-rps {\n        height: 90%;\n        width: 90%;\n        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    }\n\n    &-eas,\n    &-tic-tac-toe {\n        height: 512px;\n        width: 512px;\n        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    }\n\n    &-calc {\n        background: #333;\n    }\n}\n\n.img {\n    width: 400px;\n}\n\n// Gap\n.gap {\n    &-1 { gap: 8px }\n    &-2 { gap: 16px }\n    &-3 { gap: 24px }\n}\n\n// Padding\n.py {\n    &-0 { padding-block: 8px }\n    &-1 { padding-block: 24px }\n    &-2 { padding-block: 32px }\n    &-3 { padding-block: 44px }\n    &-4 { padding-block: 80px }\n}\n\n.pi {\n    &-1 { padding-inline: 8px }\n    &-2 { padding-inline: 12px }\n}\n\n.pb {\n    &-1 { padding-bottom: 4px }\n}\n\n.p {\n    &-0 { padding: 4px }\n    &-1 { padding: 8px }\n    &-2 { padding: 12px }\n    &-3 { padding: 24px }\n}\n\n// Margin\n.my {\n    &-1 { margin-block: 12px }\n    &-2 { margin-block: 24px }\n    &-3 { margin-block: 36px }\n    &-4 { margin-block: 80px }\n}\n\n.mb {\n    &-1 { margin-bottom: 12px }\n    &-2 { margin-bottom: 24px }\n    &-3 { margin-bottom: 36px }\n    &-4 { margin-bottom: 64px }\n}\n\n.ml {\n    &-0 { margin-left: 4px }\n    &-1 { margin-left: 8px }\n}\n\n.mt {\n    &-1 { margin-top: 12px }\n    &-2 { margin-top: 24px }\n    &-3 { margin-top: 36px }\n}\n\n.m {\n    &-auto { margin-inline: auto }\n}\n\n// Text Align\n.ta {\n    &-c { text-align: center }\n    &-r { text-align: right }\n}\n\n// Lines\n.top-line {\n    border-top: 1px solid #ccc;\n}\n\n.bottom-line {\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n\n// Hidden\n.hidden {\n    display: none;\n\n    &-mobile {\n        @media(min-width: 1024px) {\n            display: flex;\n        }\n    }\n}\n\n// Display\n.display {\n    &-block { display: block }\n}\n\n// Screen Size\n.full-screen {\n    max-height: 100vh;\n}\n\n.calc-display {\n    background: #fff;\n}","// Buttons\n.btn {\n    // General\n    cursor: pointer;\n    display: inline-block;\n    border: 2px solid transparent;\n    border-radius:10px;\n    color: var(--gray-9);\n    background: transparent;\n    font-size: 2rem;\n    transition: var(--transition);\n\n    &:active {\n        transform: scale(0.95);\n    }\n\n    &-menu {\n        @media(min-width: 1024px) {\n            display: none;\n        }\n    }\n\n    &-game {\n        background: var(--dark);\n        color: #fff;\n        \n        &:hover {\n            background: #555;\n        }\n    }\n\n    // Rock, Paper, Scissors\n    &-rps {\n        height: 150px;\n        width: 150px;\n        border-radius: 50%;\n        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n\n        &:hover {\n            transform: translateY(-2px);\n        }\n\n        &-rock {\n            color: var(--red);\n\n            &:hover {\n                background: var(--red-light);\n            }\n\n            &:active {\n                background: var(--red-dark);\n            }\n        }\n\n        &-paper {\n            color: var(--green);\n\n            &:hover {\n                background: var(--green-light);\n            }\n\n            &:active {\n                background: var(--green-dark);\n            }\n        }\n\n        &-scissors {\n            color: var(--blue);\n\n            &:hover {\n                background: var(--blue-light);\n            }\n\n            &:active {\n                background: var(--blue-dark);\n            }\n        }\n\n        &-choice {\n            font-size: 3.2rem;\n        }\n\n        &-choice-icon {\n            font-size: 4.4rem;\n        }\n    }\n\n    // Etch-a-Sketch\n    &-eas {\n        border: 1px solid var(--dark);\n\n        &.active {\n            background: var(--dark);\n            color: #fff;\n        }\n    }\n\n    // Calculator\n    &-calc {\n        background: #aaa;\n        color: #fff;\n\n        &:hover {\n            filter: brightness(0.95);\n        }\n    }\n\n    &-calc-alt {\n        background: #eee;\n        color: #333;\n    }\n\n    &-op {\n        background: #f59f00;\n    }\n\n    // Tic Tac Toe\n    &-cell {\n        background: #fff;\n        border: 2px solid #000;\n\n        &:hover {\n            background: #eee;\n        }\n    }\n}","// Fonts\n@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');\n\nbody {\n    color: var(--black);\n    font-size: 1.6rem;\n    font-family: 'Open Sans', sans-serif;\n    line-height: 1.5;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\n// Anchor Tags\n.a {\n    display: inline-block;\n    transition: var(--transition);\n\n    &-main {\n        color: #333;\n    }\n\n    &-logo,\n    &-nav-link {\n        text-transform: uppercase;\n        font-family: 'Nerko One', cursive;\n    }\n\n    &-logo {\n        background: #fff;\n        border-radius: 20px;\n        color: var(--gray);\n        font-size: 3.4rem;\n\n        &:hover {\n            color: var(--gray-light);\n        }\n    }\n\n    &-nav-link {\n        font-size: 1.6rem;\n        color: #fff;\n        border-radius: 25px;\n        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n        text-shadow: -1px 1px 0 #000,\n        1px 1px 0 #000,\n        1px -1px 0 #000,\n        -1px -1px 0 #000;\n                \n        &:hover {\n            text-shadow: -1px 1px 0 #fff,\n            1px 1px 0 #fff,\n            1px -1px 0 #fff,\n            -1px -1px 0 #fff;\n            transform: translateY(-2px);\n        }\n        \n        &:active {\n            transform: scale(0.95);\n        }\n\n        &:hover,\n        &:active {\n            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n        }\n\n\n        &-rps {\n            background: url('../assets/images/red-bg-animated.svg') no-repeat center center/cover;\n\n            &:hover {\n                color: var(--red-dark);\n            }\n        }\n\n        &-eas {\n            background: url('../assets/images/green-bg-animated.svg') no-repeat center center/cover;\n\n            &:hover {\n                color: var(--green-dark);\n            }\n        }\n\n        &-calc {\n            background: url('../assets/images/blue-bg-animated.svg') no-repeat center center/cover;\n\n            &:hover {\n                color: var(--blue-dark);\n            }\n        }\n    }\n\n    &-nav-link-ext {\n        border-color: var(--black);\n        background: url('../assets/images/gray-bg-animated.svg') no-repeat center center/cover;\n\n        &:hover {\n            color: var(--black);\n        }\n    }\n}\n\n// Headings\n.h {\n    font-family: 'Nerko One', cursive;\n\n    &-main {\n        font-size: 4rem;\n    }\n\n    &-game {\n        font-size: 3rem;\n        color: var(--dark);\n    }\n}\n\n// Paragraphs\n.p {\n    &-main {\n        font-size: 1.8rem;\n    }\n\n    &-choice {\n        font-size: 3.6rem;\n        font-family: 'Nerko One', cursive;\n    }\n\n    &-footer {\n        font-size: 1.4rem;\n    }\n\n    &-game {\n        font-size: 2rem;\n        color: var(--dark);\n    }\n\n    &-calc,\n    &-calc-display {\n        font-size: 2rem;\n    }\n\n    &-calc-display {\n        font-style: italic;\n        color: #444;\n    }\n}\n\n// Icons\n.i {\n    &-game-player {\n        font-size: 4rem;\n\n        &-choice {\n            font-size: 3rem;\n        }\n    }\n}\n\n// Images\n.img {\n    &-preview {\n        display: none;\n\n        @media(min-width: 767px) {\n            display: block;\n        }\n    }\n}","// Etch a Sketch\n.eas {\n    // Grid\n    &-grid {\n        display: grid;\n        grid-template-columns: repeat(4, 1fr);\n        grid-template-rows: repeat(4, 1fr);\n    }\n    &-square {\n        cursor: pointer;\n        border: 1px solid var(--gray-light);\n        transition: var(--transition);\n\n        &:hover {\n            filter: brightness(0.75);\n        }\n    }\n}\n\n#eas-color {\n    appearance: none;\n    background-color: transparent;\n    width: 50px;\n    height: 50px;\n    border: none;\n    cursor: pointer;\n}\n\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n    background-color: #ddd;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/blue-bg-animated.svg":
/*!************************************************!*\
  !*** ./src/assets/images/blue-bg-animated.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "blue-bg-animated.svg";

/***/ }),

/***/ "./src/assets/images/gray-bg-animated.svg":
/*!************************************************!*\
  !*** ./src/assets/images/gray-bg-animated.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "gray-bg-animated.svg";

/***/ }),

/***/ "./src/assets/images/green-bg-animated.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/green-bg-animated.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "green-bg-animated.svg";

/***/ }),

/***/ "./src/assets/images/red-bg-animated.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/red-bg-animated.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "red-bg-animated.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");


})();

/******/ })()
;
//# sourceMappingURL=bundlea571381d63b9a37041f6.js.map