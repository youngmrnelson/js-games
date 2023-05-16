'use strict';

// DOM Variables
const gameboardEl = document.querySelector('.container-tic-tac-toe');

const gameboard = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};

const Player = function (player, mark) {
  this.player = player;
  this.mark = mark;
};
