lrload-chronic
-----

A babel - watchify - reactliveload development server in [chronic](https://github.com/RnbWd/chronic)

## Example

```js
// build.js
var chron = require('chronic');
var lrload = require('lrload-chronic');

chron('live', chron
  .source('./src/main.js')
  .dest('./static'),
  lrload
)
```

```bash
$ node build live -ds
```

## How to Use

Include a source file for the entry point in browserify/watchify, and a destination directory. This is defined in chronic:

`chron.source('<path-to-entry>').dest('<path-to-directory>')`

The compiled file will be renamed `bundle.js` by default, this can be overwritten in source:

`chron.source('<path-to-entry>', '<custom-name>')`

For an inline sourcemap use `-d` in the command prompt, for a dev server use `-s`, or for both use `-ds`.

`$ node <path-to-chronic-file> <task-name> -ds`

Clone this repo for an example use case. Just run: `node testbuild live -ds` and edit the files in `src` - magic will happen.

## Caveats

The server uses es6 template strings, so I'd recommend using iojs to run the server (it's an easy fix if there's demand to change it, submit a pull request!)

Watchify will watch everything in the browserify-pipeline by default, so it's not necessary to use chronic's `--watch` on any of those files.


## License

MIT
