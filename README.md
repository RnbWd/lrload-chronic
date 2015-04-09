lrload-chronic
-----

A [babel](https://babeljs.io/) - [watchify](https://github.com/substack/watchify) - [reactliveload](https://github.com/milankinen/livereactload) in [chronic](https://github.com/RnbWd/chronic) (with sample dev server)

## Example

```js
// build.js
var chron = require('chronic');
var lrload = require('lrload-chronic');

chron('live', chron
  .source('./src/main.js')
  .dest('static'),
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

For an inline sourcemap use `-d` or `--debug` in the command prompt:

`$ node <path-to-chronic-file> <task-name> --debug`

Clone this repo for an example use case with server enabled. Just run: `node build -dso` (after `npm install`) and edit the files in `src` -- *reactliveload magic will happen* :)


## Caveats

Watchify will watch everything in the browserify-pipeline by default, so it's not necessary to use chronic's `--watch` on any of those files (weird things will happen probably, I haven't tried it).

## Credits

Example taken from [livereactload](https://github.com/milankinen/livereactload/tree/master/examples/05-build-systems)

## License

MIT
