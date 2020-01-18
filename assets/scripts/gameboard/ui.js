'use strict'

const store = require('./../store')
// const winner = require('./events')

const createGameSuccessful = function (board) {
  store.game = board.game
  for (let i = 0; i < board.game.cells.length; i++) {
    const space = $('#' + i) // = 0
    space.html('').removeClass('A').removeClass('G')
  }
  $('#game-board').show()
  $('#new-game').html('New Game')
  $('#current-player').show().html('Current Player: G')
  $('#message').show().html('Click Any Space')
  $('#winner-alert').hide()
  $('#game-status').hide()
  $('#password-message').hide()
}

const createGameFailed = function () {
  $('#message').show().html('There was a problem.')
}

// updateGameSuccessful function:
// updates the game object 'cells'
// then updates the game board from the DOM
// updates the game 'over' key
const updateGameSuccessful = function (res, index, player) {
  // console(res)
  const space = $('#' + index) // = space number
  $('#message').html('Nice Move ' + player + '!')
  space.html(player).addClass(player)
}

const updateGameFailed = function () {
  $('#message').show().html('There was a problem.')
}

const getGamesSuccessful = function (history) {
  let gameList = ''
  let gameCount = 0
  let winner
  // console(history.games)
  history.games.forEach(game => {
    if (game.cells[0] !== '' && game.cells[0] === game.cells[1] && game.cells[1] === game.cells[2]) {
      if (game.cells[0] === 'A') {
        winner = 'A'
      } else {
        winner = 'G'
      }
    } else if (game.cells[3] !== '' && game.cells[3] === game.cells[4] && game.cells[4] === game.cells[5]) {
      if (game.cells[3] === 'A') {
        winner = 'A'
      } else {
        winner = 'G'
      }
    } else if (game.cells[6] !== '' && game.cells[6] === game.cells[7] && game.cells[7] === game.cells[8]) {
      if (game.cells[6] === 'A') {
        winner = 'A'
      } else {
        winner = 'G'
      }
    } else if (game.cells[0] !== '' && game.cells[0] === game.cells[3] && game.cells[3] === game.cells[6]) {
      if (game.cells[0] === 'A') {
        winner = 'A'
      } else {
        winner = 'G'
      }
    } else if (game.cells[1] !== '' && game.cells[1] === game.cells[4] && game.cells[4] === game.cells[7]) {
      if (game.cells[1] === 'A') {
        winner = 'A'
      } else {
        winner = 'G'
      }
    } else if (game.cells[2] !== '' && game.cells[2] === game.cells[5] && game.cells[5] === game.cells[8]) {
      if (game.cells[2] === 'A') {
        winner = 'A'
      } else {
        winner = 'G'
      }
    } else if (game.cells[0] !== '' && game.cells[0] === game.cells[4] && game.cells[4] === game.cells[8]) {
      if (game.cells[0] === 'A') {
        winner = 'A'
      } else {
        winner = 'G'
      }
    } else if (game.cells[2] !== '' && game.cells[2] === game.cells[4] && game.cells[4] === game.cells[6]) {
      if (game.cells[2] === 'A') {
        winner = 'A'
      } else {
        winner = 'G'
      }
    }
    gameList += '<li>' + 'Game number: ' + game.id + '; ' + 'Winner: ' + winner + '</li>'
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

const getGamesFailed = function () {
  // console(error)
  // // console('Something went wrong here.')
}

module.exports = {
  createGameSuccessful,
  createGameFailed,
  updateGameSuccessful,
  updateGameFailed,
  getGamesSuccessful,
  getGamesFailed
}
