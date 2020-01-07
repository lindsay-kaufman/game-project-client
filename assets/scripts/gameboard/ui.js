'use strict'

const store = require('./../store')

// why is store.game undefined
const createGameSuccessful = function (response) {
  console.log('Game created')
  store.game = response.game
  console.log(store.game)
}
const createGameFailed = function (error) {
  console.log('Error')
  console.log(error)
}

const updateGameSuccessful = function (response) {
  console.log(store.game.id)
}

const updateGameFailed = function (error) {
  console.log('Update error')
  console.log(error)
}

module.exports = {
  createGameSuccessful,
  createGameFailed,
  updateGameSuccessful,
  updateGameFailed
}
