'use strict'
//
const api = require('./../api')
const ui = require('./ui')

let player = true
let board = new Array(9)
let xSpaces = new Array(9)
let oSpaces = new Array(9)
let gameOver = false
let winner = null

// create a guard to not create game if board is empty
// need to hide button until user is signed in
// store a game and create new game

const newGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccessful)
    .catch(ui.createGameFailed)
}

// have to write the functions for updateGameSuccessful and updateGameFailed
// have to write updateGame function in api file
const updateGame = function (event) {
  event.preventDefault()
  api.updateGame()
    .then(ui.updateGameSuccessful)
    .catch(ui.updateGameFailed)
}

const resetBoard = function (event) {
  // console.log('Start new game')

  $('.space').text('')
  $('#game-board').show()
  $('#current-player').text('Current player: X')
  $('#message').text('')
  player = true

  // reset game object
  board = new Array(9)
  xSpaces = new Array(9)
  oSpaces = new Array(9)
}

// checkWinnerX and checkWinnerO functions check for winner after each turn
// playGame function plays the game, pushes moves into game object
const checkWinnerX = function () {
  if (xSpaces[0] === 'X' && xSpaces[1] === 'X' && xSpaces[2] === 'X') {
    console.log('Check winner working')
    return true
  } else if (xSpaces[3] === 'X' && xSpaces[4] === 'X' && xSpaces[5] === 'X') {
    console.log('Check winner working')
    return true
  } else if (xSpaces[6] === 'X' && xSpaces[7] === 'X' && xSpaces[8] === 'X') {
    console.log('Check winner working')
    return true
  } else if (xSpaces[0] === 'X' && xSpaces[3] === 'X' && xSpaces[6] === 'X') {
    console.log('Check winner working')
    return true
  } else if (xSpaces[1] === 'X' && xSpaces[4] === 'X' && xSpaces[7] === 'X') {
    console.log('Check winner working')
    return true
  } else if (xSpaces[2] === 'X' && xSpaces[5] === 'X' && xSpaces[8] === 'X') {
    console.log('Check winner working')
    return true
  } else if (xSpaces[0] === 'X' && xSpaces[4] === 'X' && xSpaces[8] === 'X') {
    console.log('Check winner working')
    return true
  } else if (xSpaces[2] === 'X' && xSpaces[4] === 'X' && xSpaces[6] === 'X') {
    console.log('Check winner working')
    return true
  }
}
const checkWinnerO = function () {
  if (oSpaces[0] === 'O' && oSpaces[1] === 'O' && oSpaces[2] === 'O') {
    console.log('Check winner working')
    return true
  } else if (oSpaces[3] === 'O' && oSpaces[4] === 'O' && oSpaces[5] === 'O') {
    console.log('Check winner working')
    return true
  } else if (oSpaces[6] === 'O' && oSpaces[7] === 'O' && oSpaces[8] === 'O') {
    console.log('Check winner working')
    return true
  } else if (oSpaces[0] === 'O' && oSpaces[3] === 'O' && oSpaces[6] === 'O') {
    console.log('Check winner working')
    return true
  } else if (oSpaces[1] === 'O' && oSpaces[4] === 'O' && oSpaces[7] === 'O') {
    console.log('Check winner working')
    return true
  } else if (oSpaces[2] === 'O' && oSpaces[5] === 'O' && oSpaces[8] === 'O') {
    console.log('Check winner working')
    return true
  } else if (oSpaces[0] === 'O' && oSpaces[4] === 'X' && oSpaces[8] === 'X') {
    console.log('Check winner working')
    return true
  } else if (oSpaces[2] === 'O' && oSpaces[4] === 'O' && oSpaces[6] === 'O') {
    console.log('Check winner working')
    return true
  }
}

const playGame = function (event) {
  const space = event.target

  if (gameOver === true) {
    return $('#game-status').text('Game over!')
  }

  if (board[space.id] !== undefined) {
    return $('#message').text('Oops! That space is already taken.')
  }

  // player X
  if (player === true) {
    $(space).text('X')
    xSpaces[space.id] = 'X'
    board[space.id] = 'X'
    console.log('X array: ' + xSpaces)
    // console.log('Game board: ' + game.board)

    // check X winner after each turn
    if (checkWinnerX() === true) {
      $('#message').text('X is the winner!')
      $('#current-player').hide()
      winner = 'X'
      gameOver = !gameOver
      console.log('Winner: ' + winner)
    } else {
      $('#current-player').text('Current Player: O')
      $('#message').text('Nice move X!')
    }

    // player O
  } else {
    $(space).text('O')
    oSpaces[space.id] = 'O'
    board[space.id] = 'O'
    console.log('O array: ' + oSpaces)
    // console.log('Game board: ' + game.board)

    // check O winner after each turn
    if (checkWinnerO() === true) {
      $('#message').text('O is the winner!')
      $('#current-player').hide()
      winner = 'O'
      gameOver = !gameOver
    } else {
      $('#current-player').text('Current Player: X')
      $('#message').text('Nice move O!')
    }
  }
  player = !player
  updateGame()
}

const addHandlers = function () {
  $('#game-board').on('click', playGame)
  $('#new-game').on('click', resetBoard)
  $('#new-game').on('click', newGame)
}

module.exports = {
  addHandlers,
  playGame
}
