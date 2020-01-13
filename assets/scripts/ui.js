'use strict'

const store = require('./store')

const signUpSuccessful = function (response) {
  // // console('Sign up successful')
  // // console(response)
  $('#signup-message').hide()
  $('#sign-up').hide()
}

const signUpFailure = function () {
  // console(error)
  $('#signup-message').show().html('Oops! Try again.')
  $('#sign-up').each(function () {
    this.reset()
  })
}

const signInSuccessful = function (response) {
  // // console('Sign in successful')
  // // console(response)

  // store user token
  store.user = response.user

  $('#new-game').show().html('New Game')
  $('#get-games').show()
  $('#password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#dark').show()
  $('#signin-message').hide()
  $('#signup-message').hide()
}

const signInFailure = function (response) {
  // // console('Sign in failed')
  // // console(response)
  $('#signin-message').show().html('Oops! Try again.')
  $('#sign-in').each(function () {
    this.reset()
  })
}

const changePasswordSuccessful = function (response) {
  // // console('Change password successful')
  $('#change-password').each(function () {
    this.reset()
  })
  $('#change-password').hide()
  $('#password').show()
  $('#password-message').hide()
}

const changePasswordFailure = function () {
  // // console('Change password failed')
  // console(error)
  $('.password-message').show().html('Woops! Try again.')
  $('#change-password').each(function () {
    this.reset()
  })
}

const signOutSuccessful = function () {
  // // console('Sign out successful')
  $('#sign-in').each(function () {
    this.reset()
  })
  $('#sign-up').each(function () {
    this.reset()
  })

  $('#new-game').hide()
  $('#get-games').hide()
  $('#game-board').hide()
  $('#change-password').hide()
  $('#game-stats').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#current-player').hide()
  $('#message').hide()
  $('#password').hide()
  $('#dark').hide()
  $('#light').hide()
  $('#signin-message').hide()
  $('#winner-alert').hide()
  $('#game-status').hide()
}

// const signOutFailure = function () {
//   // // console('Sign out failed')
//   // console(error)
// }

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePasswordSuccessful,
  changePasswordFailure,
  signOutSuccessful
  // signOutFailure
}
