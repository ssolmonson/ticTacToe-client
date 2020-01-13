'use strict'

// const gameBoard = require('./board')
// const comboEvents = require('./events')

// Array representing winning combos based on gamePiece
//
// Defined winning combos to be referenced when checking for a winner
//
// Combos could also be determined if game symbols are equal in the respected combos

// Across [0, 1, 2], [3, 4, 5], [6, 7, 8]
// Vertically [0, 3, 6], [1, 4, 7], [2, 5, 8]
// Diagonally [0, 4, 8], [2, 4, 7]

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

const comboWin = (board) => {
  let win = false
  winningCombos.forEach((combo, index) => {
    if (board[combo[0]] !== '' && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
      win = true
    }
  })
  return win
}

const gameDraw = (board) => {
  return board.every(cell => cell !== '')
}

module.exports = {
  winningCombos,
  gameDraw,
  comboWin // ,
  // comboEvents
}

// const gboard = comboEvents.board
// console.log(comboEvents.board)
// function comboWin () {
// if getElementByID()
// }

// create way for game to reset in each function if win or draw is determined

// win = board[[0]] && board[[0]] === board[[1]] && board[[0]] === board[[2]] ? board[[0]] : null
// console.log(board)
// console.log(win)

// console.log(draw)
// if board array length is equal to 9
// if (board.length === 9) {
//   return true
// } else {
//   return false
// }
// run through board Array
// if there are no empty strings declare game a draw
