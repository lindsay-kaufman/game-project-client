'use strict'

const store = require('./../store')
const winner = require('./events')

// createGameSuccessful function:
// creates new game object in server
// stores the object
const createGameSuccessful = function (board) {
  console.log('Game created')
  store.game = board.game
  for (let i = 0; i < board.game.cells.length; i++) {
    const space = $('#' + i) // = 0
    space.html('')
  }
}

const createGameFailed = function (error) {
  console.log('Error')
  console.log(error)
}

// updateGameSuccessful function:
// updates the game object 'cells' key in JSON
// then updates the game board from the DOM
// updates the game 'over' key
const updateGameSuccessful = function (board) {
  console.log(board)
  for (let i = 0; i < board.game.cells.length; i++) {
    const value = board.game.cells[i] // = x
    const space = $('#' + i) // = 0
    space.html(value)
  }
  if (winner.checkWinner === true) {
    board.game.over = true
    console.log('Final board: ' + board)
  }
}

const updateGameFailed = function (error) {
  console.log(error)
}

const getGamesSuccessful = function (history) {
  let gameList = ''
  let gameCount = 0

  history.games.forEach(game => {
    gameList += '<li>' + 'Game number: ' + game.id + '; ' + 'Game board: [' + game.cells + ']' + '</li>'
  })

  history.games.forEach(game => {
    gameCount += 1
    return gameCount
  })
  $('#game-stats').html('Number of completed games: ' + gameCount + '<br>' + gameList)
}

const getGamesFailed = function (error) {
  console.log(error)
  console.log('Something went wrong here.')
}

module.exports = {
  createGameSuccessful,
  createGameFailed,
  updateGameSuccessful,
  updateGameFailed,
  getGamesSuccessful,
  getGamesFailed
}
