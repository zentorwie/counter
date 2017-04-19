const http = require('http')
const fs = require('fs')
const Server = require('socket.io')
const path = require('path')

let counter = 0

const server = http.createServer((req, res) => {
  if (req.url.match('/counter')) {
    if (req.method === 'POST') {
      counter += 1
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
      res.end(JSON.stringify({ counter }))
    } else if (req.method === 'GET') {
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
      res.end(JSON.stringify({ counter }))
    } else {
      res.writeHead(405)
      res.end()
    }
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(4321)

const io = Server(server)

let onlineUsers = 0

io.on('connection', (socket) => {
  onlineUsers += 1
  console.log('User connected, current online:', onlineUsers)
  socket.on('disconnect', () => {
    onlineUsers -= 1
    console.log('User disconnected, current online:', onlineUsers)
  })
  socket.on('increase', () => {
    counter += 1
    io.emit('update', counter)
  })
  socket.on('get', () => {
    io.emit('update', counter)
  })
})

try {
  console.log('reading local DB file...')
  let file = fs.readFileSync(path.join(__dirname, './db.txt'))
  let db = JSON.parse(file.toString())
  console.log(db)
  counter = db.counter
} catch (e) {
  console.error(e)
  console.log('reading DB failed. use 0 as initial value of counter.')
}

setInterval(() => {
  fs.writeFile(path.join(__dirname, './db.txt'), JSON.stringify({ counter }), (err) => {
    if (err) {
      console.error(err)
      console.log('saving failed')
    } else {
      console.log('saved counter', counter)
    }
  })
}, 5000)
