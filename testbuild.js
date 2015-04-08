var chron = require('chronic');
var lrload = require('./');

chron('live', chron
  .source('./src/main.js')
  .dest('./static'),
  lrload
)
