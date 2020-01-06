'use strict'

const store = require('./store')

const signUpSuccessful = function (response) {
  $('#message').text('Successfully signed up!')
  console.log(response)

  // $('#game-board').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#create-example').show()
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed.')
  console.log(error)
}

const signInSuccessful = function (response) {
  $('#message').text('Successfully signed in!')
  console.log(response)

  // store user token
  store.user = response.user

  // $('#game-board').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const signInFailure = function (response) {
  $('#message').text('Failed to sign in')
  console.log(response)
}

const changePasswordSuccessful = function (response) {
  $('#message').text('Password successfully changed!')
  console.log(response)
}

const changePasswordFailure = function (error) {
  $('#message').text('Password failed to change')
  console.log(error)
}

const signOutSuccessful = function () {
  $('#message').text('You have been successfully signed out!')
  $('#sign-in').each(function () {
    this.reset()
  })

  $('#game-board').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#create-example').hide()
}
const signOutFailure = function (error) {
  $('#message').text('You are still signed in')
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
