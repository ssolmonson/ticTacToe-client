'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function () {
  // console.log('data: ',)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const indexGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games', // ?over=
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGame = function (game) {
  return $.ajax({
    url: config.apiUrl + '/games/' + game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': 0,
          'value': 'x'
        },
        'over': false
      }

    }
    // data: data
  })
}

module.exports = {
  createGame,
  indexGame,
  showGame,
  updateGame
}
