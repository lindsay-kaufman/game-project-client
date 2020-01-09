'use strict'

const store = require('./store')

const signUpSuccessful = function (response) {
  // console.log('Sign up successful')
  console.log(response)
  $('#signup-message').hide()
  $('#sign-up').hide()
}

const signUpFailure = function (error) {
  console.log(error)
  $('#signup-message').html('Oops! Try again.')
}

const signInSuccessful = function (response) {
  // console.log('Sign in successful')
  console.log(response)

  // store user token
  store.user = response.user

  $('#new-game').show()
  $('#get-games').show()
  $('#password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#dark').show()
}

const signInFailure = function (response) {
  // console.log('Sign in failed')
  console.log(response)
}

const changePasswordSuccessful = function (response) {
  // console.log('Change password successful')
  console.log(response)
  $('#password-message').html('Your password has been changed!')
  $('#change-password').each(function () {
    this.reset()
  })
}

const changePasswordFailure = function (error) {
  // console.log('Change password failed')
  console.log(error)
  $('#password-message').html('Old password incorrect. Try again.')
  $('#change-password').each(function () {
    this.reset()
  })
}

const signOutSuccessful = function () {
  // console.log('Sign out successful')
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
}

const signOutFailure = function (error) {
  // console.log('Sign out failed')
  console.log(error)
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePasswordSuccessful,
  changePasswordFailure,
  signOutSuccessful,
  signOutFailure
}
