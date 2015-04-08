var express = require('express')
var fs = require('fs')
var opn = require('opn')

var app = express()

var port = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send(`<!DOCTYPE html>
     <html>
     <head><title>LiveReactload basic example</title></head>
     <body><div id="app"></div><script type="text/javascript" src="/static/bundle.js"></script></body>
     </html>`)
})

app.get('/static/bundle.js', function (req, res) {
  res.send(fs.readFileSync('static/bundle.js'))
})

app.listen(port)

console.log(`listening on port ${port}`)
opn('http://localhost:3000')
