'use strict'

const checkWin = require('./winCombos')
const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('./../../../lib/get-form-fields')
// const newGame = require('./boardreset')
// const store = require('../store')

let board = [
  '', '', '',
  '', '', '',
  '', '', ''
]
let gameOver = false
let turn = 'X'

// const apiUpdate = api.updateGame()

const selectBox = (event) => {
// IF GAMEOVER IS TRUE DO THE STUFF, OTHERWISE, MAKE A MESSAGE
  if (gameOver === true) {
    // do nothing
  } else {
    const id = event.target.id
    const cell = $(event.target)
    // If box is already selected
    // console.log(id)
    if (cell.text() === 'X' || cell.text() === 'O') {
      // notify to select another box
      $('div.game-over').text('Pick a different box!')
    } else {
      // push player symbol to gameboard array using id as the index
      // checkWin.board[id] = turn
      board[id] = turn
      // otherwise place current player symbol in the selected box
      cell.text(turn)
      // // then change player based on which player just placed a symbol
      turn = (turn === 'X') ? 'O' : 'X'
      $('div.game-over').text('Player ' + turn)
      // api.updateGame()
      //   .then(ui.updateGameSuccess)
      //   .catch(ui.updateGameFailure)
      // comboWin will be executed first to determine if game is a winner and to be reset
      // the gameDraw will excute  to determine if a draw and to be reset
      // if neither comboWin or gameDraw determine an end play will continue
      //
      // call function from wincombos file using the const board as an argument
      // console.log(checkWin.gameDraw(board))
      if (checkWin.comboWin(board)) {
        turn = (turn === 'X') ? 'O' : 'X'
        $('div.game-over').text('Player ' + turn + ' wins!')
        gameOver = true
        // api.updateGame()
        //   .then(ui.updateGameSuccess)
        //   .catch(ui.updateGameFailure)
      } else if (checkWin.gameDraw(board)) {
        $('div.game-over').text('Game is a draw.')
        // api.updateGame()
        //   .then(ui.updateGameSuccess)
        //   .catch(ui.updateGameFailure)
        gameOver = true
      } else {
      }
      // $('div.game-over').text('Player ' + turn)
      // then change player based on which player just placed a symbol
      // turn = (turn === 'X') ? 'O' : 'X'
      // $('div.game-over').text('Player ' + turn)
      api.updateGame()
        .then(ui.updateGameSuccess)
        .catch(ui.updateGameFailure)
    }
    // console.log(id)
    // console.log(id.text())}
  }
  // Test reset board
  // console.log(board)
}
// Click on a game cell
// $('.game-cell').on('click', selectBox)

// Reset game board to default values
// const boardReset = () => {
const boardReset = () => {
  event.preventDefault()
  gameOver = false
  turn = 'X'
  $('div.game-cell').text('')
  // $('div.current-player').text('Player X')
  $('div.game-over').text('Player X')
  board = ['', '', '', '', '', '', '', '', '']
  // game board initially hidden
  // show board when after each New game
  $('.game-board').show()
  $('.game-cell').show()
  $('#message').text('')
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

// Click on a game cell
$('.game-cell').on('click', selectBox)
// Reset game board to default values
$('#reset-board').on('submit', boardReset)

// const addHandlers = () => {
//   // Reset game board to default values
//   $('#reset-board').on('submit', boardReset)
//   // Click on a game cell
//   $('.game-cell').on('click', selectBox)
// }

module.exports = {
  selectBox,
  checkWin,
  board
  // addHandlers
}

// OLD CODE

// after each click run a function to check for a winner or a draw
// checkWin.comboWin()
// add a class such as "clicked" once a 'box' has been clicked
// check for the class clicked when clicking the box
// if has class of clicked return a message displaying to try another box
// otherwise allow symbol to be placed withn box

// Mouseover to show currently selected square
// if square is an invalid placement show a light red opacity

// function will reference the gameBoard[i].gamePiece
// all gamePieces must match

// Click event listener to place current token in space 0-8
// const showClick = () => {
//   const gameId = $('.col-4').val()
//   console.log(gameId)
// }
//
// let turn = 'X'
// const playerTurn = () => {
//
// tenary operator to change player when running playerTurn function after click event
//  turn = (turn === 'X') ? 'O' : 'X'
// }
// let currentPlayer = (turn) => {
//   if (turn === 'X') {
//     turn = 'O'
//   } else {
//     turn = 'X'
//   }
// }

// $(this.id).text('test')
// $('#3').text('X') // event test

//
// $('#0').on('click', selectBox)
// $('#1').on('click', selectBox)
// $('#2').on('click', selectBox)
// $('#3').on('click', selectBox)
// $('#4').on('click', selectBox)
// $('#5').on('click', selectBox)
// $('#6').on('click', selectBox)
// $('#7').on('click', selectBox)
// $('#8').on('click', selectBox)

// $('#0').click(() => {
//   $('#' + this.id).text('X')
// })
// checkWin.gameDraw(board)
// if (winner === true) {
//   gameOver = true
// }
// console.log(checkWin.winningCombos)
// if (true) {
//   console.log('Player ' + turn + ' wins!')
// if (checkWin.gameDraw(board) === true) {
//   console.log('Draw')
// } else {}
// } else {
// }
// id.classList.add('clicked')
