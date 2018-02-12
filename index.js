'use strict'

const express = require('express')
var bodyParser = require('body-parser')


//Web Server
const webApp = express()


webApp.use(bodyParser.urlencoded({ extended: false }))
webApp.use(bodyParser.json())

webApp.use(express.static(__dirname + '/webApp'))
webApp.use(express.static(__dirname + '/mobileApp'))

webApp.get('/', (req, res) => {
  res.sendFile('index.html')
})

webApp.get('/mobile', (req, res) => {
  res.sendFile(__dirname + '/mobileApp/mindex.html')
})

webApp.post('/websocket', (req, res)=> {
  if(req.body.Type === "SubscriptionConfirmation"){
    res.send(req.body)
  } else if (req.body.Type === "Notification") {
    res.send(req.body)
  }
})

const webServer = webApp.listen(3000)


//Pages to show on load





// //create websocket server
// var wss = require('ws').Server
// var s = new wss({ port: 5001 })
//
//
// s.on('connection', function(ws) {
//   ws.on('message', function(message) {
//     //send message out to all clients
//     s.clients.forEach(c => {
//       //to reference current client you check if(s == c), i.e. if you'd like to not send something back to the current client. think chat application.
//       c.send(message)
//     })
//   })
// })
