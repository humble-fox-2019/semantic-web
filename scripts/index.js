$(document).ready(function () {
  console.log('document ready!');

  $('.page').click(function (event) {
    event.preventDefault()
  })

  $('#home-btn').click(function (event) {
    $('.random-page').hide(500)
    $('.home-page').show(1000)
  })

  $('#random-btn').click(function (event) {
    $('.home-page').hide(500)
    $('.random-page').show(1000)
  })
})