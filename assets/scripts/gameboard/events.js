'use strict'
//
// TO DO:
// -need to hide new game button until user is signed in
// -fix bug inside newGame
// -fix get games bug
// -make button to hide user stats
// -bug: if invalid space is clicked message does not change for remainder of game
// if game over add message asking to play again

const api = require('./../api')
const ui = require('./ui')

let player = true
let gameOver = false
let board = ['', '', '', '', '', '', '', '', '']
let moves = 0

const newGame = function (event) {
  event.preventDefault()
  api.createGameObject()
    .then(ui.createGameSuccessful)
    .catch(ui.createGameFailed)

  $('#game-board').show()
  $('#game-stats').hide()
  // BUG: why is this not appearing after there is a winner
  $('#current-player').html('Current player: X')
  $('#message').html('')

  player = true
  board = ['', '', '', '', '', '', '', '', '']
  gameOver = false
  moves = 0
}

const updateGame = function (index, value, over) {
  event.preventDefault()

  api.updateGameObject(index, value, over)
    .then(ui.updateGameSuccessful)
    .catch(ui.updateGameFailed)
}

// bug: cannot view games after clicking new game
const getGames = function (event) {
  event.preventDefault()
  api.getGameStats()
    .then(ui.getGamesSuccessful)
    .catch(ui.getGamesFailed)
}

// checkWinner function:
// * checks if winning combinations are valid and equal to each other
// * returns true if a winner is found
const checkWinner = function () {
  // console.log(board)
  if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
    console.log('Check winner working')
    return true
  } else if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
    console.log('Check winner working')
    return true
  } else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
    console.log('Check winner working')
    return true
  } else if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
    console.log('Check winner working')
    return true
  } else if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
    console.log('Check winner working')
    return true
  } else if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
    console.log('Check winner working')
    return true
  } else if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
    console.log('Check winner working')
    return true
  } else if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
    console.log('Check winner working')
    return true
  }
}

// checks for draw
const moveCount = function () {
  moves++
  console.log('Moves: ' + moves)
  return moves
}

// playGame function:
// * determins if game is over and stops game board from changing if game is over
// * stops user from clicking on invalid space
// * checks for winner or draw
// * lets player know who's turn it is, toggles player
// * lets player know who winner is
// * passes arguments into updateGame function and updates game object in server
const playGame = function (event) {
  const space = event.target
  let spaceValue

  // make sure game is not over
  if (gameOver === true) {
    return $('#game-status').text('Game over!')
  }

  // make sure space is valid
  if (board[space.id] !== '') {
    return $('#message').text('Oops! That space is already taken.')
  }

  if (moves === 9) {
    // if (!checkWinner) {
    gameOver = !gameOver
    $('#message').text('Draw!')
    console.log('Draw')
  }
  // }

  if (player === true) {
    spaceValue = 'X'
    board[space.id] = 'X'
    // console.log('Game board: ' + board)
    if (checkWinner() === true) {
      $('#message').text('X is the winner!')
      $('#current-player').hide()
      gameOver = !gameOver
    }
  } else {
    spaceValue = 'O'
    board[space.id] = 'O'
    // console.log('Game board: ' + board)
    if (checkWinner() === true) {
      gameOver = !gameOver
      $('#message').text('O is the winner!')
      $('#current-player').hide()
    }
  }

  // toggle player and update game after each turn
  player = !player

  // console.log(player)
  // console.log(space.id)
  // console.log(spaceValue)
  // console.log(gameOver)
  updateGame(space.id, spaceValue, gameOver)
}

const addHandlers = function () {
  $('#game-board').on('click', moveCount)
  $('#game-board').on('click', playGame)
  $('#new-game').on('click', newGame)
  $('#get-games').on('click', getGames)
}

module.exports = {
  addHandlers,
  playGame,
  checkWinner
}
