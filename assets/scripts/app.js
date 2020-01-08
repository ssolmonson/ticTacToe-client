'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  // $('.col-4').on('click', gameEvents.showClick)
  authEvents.addHandlers()
  gameEvents.addHandlers()
})
