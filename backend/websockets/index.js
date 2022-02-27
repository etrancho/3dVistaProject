const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 5000
const io = require('socket.io')(server)
const path = require('path')

const randomStr = (n = 5) => [...Array(n)]
  .map(e => String.fromCharCode((Math.random() * 26) + 97))
  .join("")
  
const username = randomStr()

app.use(express.static(path.join(__dirname + '/public')))

io.on('connection', socket => {
  // console.log('Some client connected')
  socket.on('chat', message  => {
    texto = username + ': ' + message
    console.log('From', texto)
    io.emit('chat', texto)
  })
})

server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})