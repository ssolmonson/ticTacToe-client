'use strict'
const events = require('./events')
const store = require('../store')

const createGameSuccess = (response) => {
  console.log('Created a game!')
  store.game = response.game
}

const createGameFailure = () => {
  console.log('Failed to create game.')
}

const updateGameSuccess = () => {
  console.log('Updated a game!')
}

const updateGameFailure = () => {
  console.log('Failed to update game.')
}

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  createGameFailure,
  updateGameFailure,
  events
}
