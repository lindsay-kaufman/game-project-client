'use strict'

const store = require('./store')

const signUpSuccessful = function (response) {
  console.log('Sign up successful')
  console.log(response)

  $('#sign-up').hide()
}

const signUpFailure = function (error) {
  console.log('Sign up failed')
  console.log(error)
}

const signInSuccessful = function (response) {
  console.log('Sign in successful')
  console.log(response)

  // store user token
  store.user = response.user

  $('#new-game').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const signInFailure = function (response) {
  console.log('Sign in failed')
  console.log(response)
}

const changePasswordSuccessful = function (response) {
  console.log('Change password successful')
  console.log(response)
}

const changePasswordFailure = function (error) {
  console.log('Change password failed')
  console.log(error)
}

const signOutSuccessful = function () {
  console.log('Sign out successful')
  $('#sign-in').each(function () {
    this.reset()
  })

  $('#new-game').hide()
  $('#game-board').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}
const signOutFailure = function (error) {
  console.log('Sign out failed')
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
