/* global describe, it */

var chron = require('chronic');
var browserify = require('browserify')
var babelify = require('babelify')
var assert = require('assert');
var lrload = require('livereactload')

describe('default', function () {
  chron('default', function (t) { console.log('hello'); t.done() });
  it('should run default', function () {});
})

describe('tasks', function () {
  it('should have correct info', function (done) {
    chron('default', chron
      .source('./src/main.js', 'testing.js')
      .dest('static'),
      function (t) {
        assert.equal(t.files[0], './src/main.js');
        assert.equal(t.path, 'static');

        var b = browserify({
          entries: [t.files[0]],
          cache: {},
          packageCache: {},
          transform: [ babelify, lrload ],
          debug: t.params.d || t.params.debug,
          bundleExternal: false
        })

        var name = t.files[1] || 'bundle.js';

        assert.equal(name, 'testing.js');

        assert.equal(t.path + '/' + name, 'static/testing.js')

        t.pump(b.bundle(), t.source(name), t.dest(), function (err) {
          if (err) throw err;
          t.done(err)
          done(err);
        })
      }
    ).run()
  })
})
