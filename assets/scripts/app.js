'use strict'

// use require with a reference to bundle the file and use it in this file
const events = require('./events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#game-board').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  events.addHandlers()
})
