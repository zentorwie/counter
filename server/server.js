const http = require('http')
const fs = require('fs')

let counter = 0

const server = http.createServer((req, res) => {
  if (req.url.match('/counter')) {
    if (req.method === 'POST') {
      counter += 1
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      })
      res.end(JSON.stringify({ counter }))
    } else if (req.method === 'GET') {
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
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

try {
  console.log('reading local DB file...')
  let file = fs.readFileSync('./db.txt')
  let db = JSON.parse(file.toString())
  console.log(db)
  counter = db.counter
} catch (e) {
  console.error(e)
  console.log('reading DB failed. use 0 as initial value of counter.')
}

setInterval(() => {
  fs.writeFile('./db.txt', JSON.stringify({ counter }), (err) => {
    if (err) {
      console.error(err)
      console.log('saving failed')
    } else {
      console.log('saved counter', counter)
    }
  })
}, 5000)

server.listen(4321)
