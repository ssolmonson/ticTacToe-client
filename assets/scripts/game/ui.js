'use strict'
const events = require('./events')
const store = require('../store')

const createGameSuccess = (response) => {
  // console.log(response)
  store.game = response.game
}

const createGameFailure = () => {
  // console.log('Failed to create game.')
}

const updateGameSuccess = (data) => {
  store.game = data.game
  // console.log('Updated a game!')
}

const updateGameFailure = () => {
  // console.log('Failed to update game.')
}

const indexGameSuccess = (response) => {
  // console.log(response.games.length) // game).length)
  // store.game = games.game
  $('.games-played').text(response.games.length)
}

const indexGameFailure = () => {
  // console.log('Failed to getgame.')
}

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  indexGameSuccess,
  createGameFailure,
  updateGameFailure,
  indexGameFailure,
  events
}
