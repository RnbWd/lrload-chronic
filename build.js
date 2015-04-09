var chron = require('chronic');
var lrload = require('./');

chron('default', chron
  .source('./src/main.js')
  .dest('static'),
  lrload
)
