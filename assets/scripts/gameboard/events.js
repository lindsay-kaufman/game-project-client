'use strict'

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

  player = true
  board = ['', '', '', '', '', '', '', '', '']
  gameOver = false
  moves = 0
}

const updateGame = function (index, player, over) {
  event.preventDefault()

  api.updateGameObject(index, player, over)
    .then(res => {
      ui.updateGameSuccessful(res, index, player)
    })
    .catch(ui.updateGameFailed)
}

const getGames = function (event) {
  event.preventDefault()
  api.getGameStats()
    .then(ui.getGamesSuccessful)
    .catch(ui.getGamesFailed)
}

const hideGames = function () {
  $('#game-stats').hide()
  $('#get-games').show()
  $('#hide-games').hide()
}

const checkWinner = function () {
  if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
    return true
  } else if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
    return true
  } else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
    return true
  } else if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
    return true
  } else if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
    return true
  } else if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
    return true
  } else if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
    return true
  } else if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
    return true
  }
  return false
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

  // make sure game is not over before clicking a space
  if (gameOver === true) {
    return $('#game-status').show().html('Game Over!')
  }

  // make sure space is valid
  if (board[space.id] !== '') {
    // // console('ID: ' + space.id)
    return $('#message').html('Oops! That is not a space.')
  }

  // counts number of moves to check for draw
  moves++

  if (checkWinner() === false) {
    if (moves === 9) {
      $('#game-status').show().html('Tie Game!')
      $('#message').hide()
      $('#current-player').hide()
      $('#new-game').html('Play Again?')
      // // console('Draw')
    }
  }

  if (player === true) {
    spaceValue = 'G'
    board[space.id] = 'G'
    $('#current-player').text('Current Player: A')
    if (checkWinner() === true) {
      $('#winner-alert').show().html('G is the winner!')
      $('#current-player').hide()
      $('#new-game').html('Play Again?')
      $('#message').hide()
      $('#game-status').hide()
      gameOver = !gameOver
    }
  } else {
    spaceValue = 'A'
    board[space.id] = 'A'
    $('#current-player').text('Current Player: G')
    if (checkWinner() === true) {
      $('#winner-alert').show().html('A is the winner!')
      $('#new-game').html('Play Again?')
      $('#current-player').hide()
      $('#message').hide()
      $('#game-status').hide()
      gameOver = !gameOver
    }
  }

  // toggle player and update game after each turn
  player = !player

  updateGame(space.id, spaceValue, gameOver)
}

const goDark = function () {
  $('body').removeClass('go-light')
  $('body').addClass('go-dark')
  $('#light').show()
  $('#dark').hide()
}

const goLight = function () {
  $('body').removeClass('go-light')
  $('body').addClass('go-light')
  $('#dark').show()
  $('#light').hide()
}

const addHandlers = function () {
  $('#game-board').on('click', playGame)
  $('#new-game').on('click', newGame)
  $('#get-games').on('click', getGames)
  $('#hide-games').on('click', hideGames)
  $('#dark').on('click', goDark)
  $('#light').on('click', goLight)
}

module.exports = {
  addHandlers,
  playGame,
  checkWinner,
  goLight
}
