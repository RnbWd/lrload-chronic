var express = require('express')
var fs = require('fs')
var opn = require('opn')

var app = express()

var port = process.env.PORT || 3000

module.exports = function (spath) {
  spath = spath || '/static/bundle.js';

  app.get('/', function (req, res) {
    res.send(`<!DOCTYPE html>
      <html>
      <head><title>LiveReactload basic example</title></head>
      <body><div id="app"></div><script type="text/javascript" src=${spath}></script></body>
      </html>`
    )
  })

  app.get(spath, function (req, res) {
    res.send(fs.readFileSync(spath))
  })

  app.listen(port)

  console.log(`listening on port ${port}`)

  opn(`http://localhost:${port}`)
}
