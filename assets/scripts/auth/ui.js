'use strict'

const store = require('./../store')
const signUpSuccess = function (response) {
  $('#message').text('Successfully signed up!')
  // console.log(response)
}

const signInSuccess = function (response) {
  $('#message').text('Successfully signed in!')
  store.user = response.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('.create-game').show()
  // console.log(response)
}

const changeSuccess = function (response) {
  $('#message').text('Password changed successfully!')
  // console.log(response)
}

const signOutSuccess = function (response) {
  $('#message').text('Sign out complete!')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.game-board').hide()
  $('.create-game').hide()
  $('.games-played').hide()
  $('div.game-over').text('')
  $('#message').delay(1500).hide('Sign out complete!')
  // console.log(response)
}

const signUpFailure = function () {
  $('#message').text('Sign up failed!')
  // console.log(error)
}

const signInFailure = function () {
  $('#message').text('Sign in failed!')
  // console.log(error)
}

const changeFailure = function () {
  $('#message').text('Failed to change password.')
  // console.log(error)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changeSuccess,
  signOutSuccess,
  signUpFailure,
  signInFailure,
  changeFailure
}
