lrload-chronic
-----

A [babel](https://babeljs.io/) - [watchify](https://github.com/substack/watchify) - [reactliveload](https://github.com/milankinen/livereactload) development server in [chronic](https://github.com/RnbWd/chronic)

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

To start a dev server use `-s` or `--serve`:

`$ node <path-to-chronic-file> <task-name> --serve`

To open the site in your default browser use `-o` or `--open`:

`$ node <path-to-chronic-file> <task-name> -s --open`

For all three (or any combo) use the shorthand:

`$ node <path-to-chronic-file> <task-name> -dso`

Clone this repo for an example use case. Just run: `node build -ds` and edit the files in `src` - magic will happen :)



## Caveats

The server is mostly convience and uses es6 templates, so I'd recommend using your own static dev server in the build process. If you'd like to run the server, I'd recommend using iojs (the template strings are an easy fix, so submit a pull request or issue if you'd like to use the built-in server). The destination folder must also be a simple string for the correct path to show up in the express route (I know, I know).

Watchify will watch everything in the browserify-pipeline by default, so it's not necessary to use chronic's `--watch` on any of those files (or weird things will happen).

## Credits

Example taken from [livereactload](https://github.com/milankinen/livereactload/tree/master/examples/05-build-systems)

## License

MIT
