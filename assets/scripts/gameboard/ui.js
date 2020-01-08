'use strict'

const store = require('./../store')
const winner = require('./events')

// createGameSuccessful function:
// creates new game object in server
// stores the object
// want to clear game board in this function instead of events.js
const createGameSuccessful = function (board) {
  console.log('Game created')
  store.game = board.game
  // for (let i = 0; i < board.game.cells.length; i++) {
  //   const space = $('#' + i) // = 0
  //   space.html('')
  // }
}

const createGameFailed = function (error) {
  console.log('Error')
  console.log(error)
}

// updateGameSuccessful function:
// updates the game object cells array in JSON
// then updates the game board from the DOM
// updates the game over status
const updateGameSuccessful = function (board) {
  for (let i = 0; i < board.game.cells.length; i++) {
    const value = board.game.cells[i] // = x
    const space = $('#' + i) // = 0
    space.html(value)
  }
  if (winner.checkWinner === true) {
    board.game.over = true
    console.log(board)
  }
}

const updateGameFailed = function (error) {
  console.log(error)
}

module.exports = {
  createGameSuccessful,
  createGameFailed,
  updateGameSuccessful,
  updateGameFailed
}
