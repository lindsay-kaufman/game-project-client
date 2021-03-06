'use strict'

// use require with a reference to bundle the file and use it in this file
const events = require('./events')
const gameEvents = require('./gameboard/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#new-game').hide()
  $('#winner-alert').hide()
  $('#get-games').hide()
  $('#game-stats').hide()
  $('#hide-games').hide()
  $('#game-board').hide()
  $('#change-password').hide()
  $('#password').hide()
  $('#play-again').hide()
  $('#sign-out').hide()
  $('#dark').hide()
  $('#light').hide()
  events.addHandlers()
  gameEvents.addHandlers()
})
