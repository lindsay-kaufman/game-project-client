const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const gameEvents = require('./gameboard/events')

const onSignUp = function () {
  event.preventDefault()
  const form = event.target
  // get data from sign up form
  const data = getFormFields(form)
  // send form data to api to store new user
  api.signUp(data)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailure)
}

const onSignIn = function () {
  event.preventDefault()
  const form = event.target
  // get data from sign in form
  const data = getFormFields(form)
  // send to api
  api.signIn(data)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailure)
}

const showChangePassword = function () {
  $('#change-password').show()
  $('#password').hide()
}

const onChangePassword = function () {
  event.preventDefault()
  const form = event.target
  // get new password data
  const data = getFormFields(form)
  // send new password data to api
  api.changePassword(data)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function () {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#password').on('click', showChangePassword)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#sign-out').on('click', gameEvents.goLight)
}

module.exports = {
  addHandlers
}
