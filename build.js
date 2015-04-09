var chron = require('chronic');
var lrload = require('./');
var opn = require('opn');

chron('default', chron
  .source('./src/main.js')
  .dest('static'),
  lrload
)

chron('serve', function (t) {
  require('./server')
  var port = process.env.PORT || 3000;
  if (t.params.o || t.params.open) {
    opn(`http://localhost:${port}`)
  }
})
