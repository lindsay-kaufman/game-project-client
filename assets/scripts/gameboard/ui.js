'use strict'

const store = require('./../store')

const createGameSuccessful = function (board) {
  // console.log('Game created')
  store.game = board.game
  for (let i = 0; i < board.game.cells.length; i++) {
    const space = $('#' + i) // = 0
    space.html('')
  }
  $('#game-board').show()
  $('#play-again').hide()
  $('#current-player').show().html('Current Player: X')
  $('#message').show().html('Click Any Space') // BUG not showing after there is a winner
  $('#winner-alert').hide()
  $('#game-status').hide()
  $('#password-message').hide()
}

const createGameFailed = function (error) {
  console.log('Error')
  console.log(error)
}

// updateGameSuccessful function:
// updates the game object 'cells' key in JSON
// then updates the game board from the DOM
// updates the game 'over' key
const updateGameSuccessful = function (res, index, player) {
  console.log(res)
  const space = $('#' + index) // = index
  console.log('i is ', index)
  console.log('value is ', player)
  $('#message').html('Nice Move ' + player + '!')
  space.html(player)
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
  $('#get-games').hide()
  $('#hide-games').show()
  $('#game-stats').show()
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
