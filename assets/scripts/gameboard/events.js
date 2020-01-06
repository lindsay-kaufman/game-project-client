'use strict'

const board = new Array(9)
const xSpaces = new Array(9)
const oSpaces = new Array(9)
let player = true

// for loop less than 8
// space.text('X')
const playGame = function (space) {
  space = event.target
  $(space).on('click', event => {
    if (board[space.id] === undefined) {
      if (player === true) {
        $(space).text('X')
        xSpaces[space.id] = 'X'
        board[space.id] = 'X'
        console.log('X array: ' + xSpaces)
        console.log('O is up!')
      } else {
        $(space).text('O')
        oSpaces[space.id] = 'O'
        board[space.id] = 'O'
        console.log('O array: ' + oSpaces)
        console.log('X is up!')
      }
      player = !player
    } else {
      console.log('Space is invalid')
    }
  })
}

// const clickSpace = function () {
//   console.log('Space clicked')
// }

// const spaceText = function (space) {
//   space = event.target
//   $(space).text('Space Clicked')
// }

const addHandlers = function () {
  $('#0').on('click', playGame)
  $('#1').on('click', playGame)
  $('#2').on('click', playGame)
  $('#3').on('click', playGame)
  $('#4').on('click', playGame)
  $('#5').on('click', playGame)
  $('#6').on('click', playGame)
  $('#7').on('click', playGame)
  $('#8').on('click', playGame)
}

module.exports = {
  addHandlers
}
