'use strict'

const express = require('express')

//Web Server
const webApp = express()
webApp.use(express.static(__dirname + '/webApp'))
webApp.use(express.static(__dirname + '/mobileApp'))
const webServer = webApp.listen(3000)


//Pages to show on load

webApp.get('/', (req, res) => {
  res.sendFile('index.html')
})

webApp.get('/mobile', (req, res) => {
  res.sendFile(__dirname + '/mobileApp/mindex.html')
})



//create websocket server
var wss = require('ws').Server
var s = new wss({ port: 5001 })


s.on('connection', function(ws) {
  ws.on('message', function(message) {
    //send message out to all clients
    s.clients.forEach(c => {
      //to reference current client you check if(s == c), i.e. if you'd like to not send something back to the current client. think chat application.
      c.send(message)
    })
  })
})
