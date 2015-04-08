lrload-chronic
-----

A react - babel - watchify - reactliveload development server in [chronic](https://github.com/RnbWd/chronic)

## Example

```
// build.js
var chron = require('chronic');
var lrload = require('lrload-chronic');

chron('live', chron
  .source('./src/main.js')
  .dest('./static'),
  lrload
)
```

```
$ node build live -ds
```

## How to Use

You must include a source file which will be used for the entry point in browserify/watchify, also a destination directory. This is defined in chronic:

`chron.source('<path-to-entry>').dest('<path-to-directory>')`

The compiled file will be renamed `bundle.js` by default, this can be overwritten in source:

`chron.source('<path-to-entry>', '<custom-name>')`

For an inline sourcemap include '-d' in the command prompt

For a dev server include '-s' in the command prompt. (or '-ds' for both)

`$ node <path-to-chronic-file> <task-name> -ds`



## License

MIT
