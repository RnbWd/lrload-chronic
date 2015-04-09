var lrload = require('livereactload')
var browserify = require('browserify')
var watchify = require('watchify')
var babelify = require('babelify')

module.exports = function (t) {
  // start livereact server

  lrload.listen()

  var b = browserify({
    entries: [t.files[0]],
    cache: {},
    packageCache: {},
    transform: [ babelify, lrload ],
    debug: t.params.d || t.params.debug
  })

  var w = watchify(b)

  var name = t.files[1] || 'bundle.js';

  rebundle()

  w.on('error', console.log)
   .on('log', console.log)
   .on('update', rebundle)

  function rebundle () {
    w.bundle()
     .on('error', console.log)
     .pipe(t.source(name))
     .pipe(t.dest())
     .pipe(lrload.gulpnotify())
  }
}
