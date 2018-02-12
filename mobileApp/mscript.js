
var socket = new WebSocket('ws://twitterswipe-env.us-east-2.elasticbeanstalk.com:5001') //must be the same address as your web server (192.168.1.3 will change based on current lan connection)

function moveLeft(e) {
  console.log('clicked left')
  socket.send('leftClick')
}

function moveRight(e) {
  console.log('clicked right')
  socket.send('rightClick')
}


//add touch events for later use.

var box = document.getElementById('touchBox')
var startX = 0
var dist = 0

function touchStart(e) {
  var touchObj = e.changedTouches[0]
  startX = parseInt(touchObj.clientX)
  socket.send('distance > ' + dist)
  e.preventDefault()
}

function touchMove(e) {
  var touchObj = e.changedTouches[0]
  dist = parseInt(touchObj.clientX) - startX
  socket.send('distance > ' + dist)
  e.preventDefault()
}

function touchEnd(e) {
  socket.send('distance > ' + dist)
  e.preventDefault()
}

box.addEventListener('touchstart', touchStart)
box.addEventListener('touchmove', touchMove)
box.addEventListener('touchend', touchEnd)
