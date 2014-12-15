grunt-smartsprites
==================


> Grunt task for [smartsprites](https://github.com/carrotsearch/smartsprites)


## Dependencies

*  java    `~jre 1.6`  
*  nodejs  `>= 0.8.0`
*  grunt  `>= 0.4.0`


## Usage

`npm install grunt-smartsprites --save-dev`


```js
smartsprites: {
  dev: {
    rootDirPath: 'style/source/',
    outputDirPath: 'style/',
    cssFileSuffix: '',
    documentRootDirPath: '',
    stdout: true,
    stderr: true,
    callback: function () {
      grunt.log.writeln('smartsprite exec successfully.');
    }
  }
}
```

### Options:

All arguments of `smartsprites` are supported, you just need to camelize it.

```
  # Options                   # Smartsprites argument
  rootDirPath :               root-dir-path
  cssFiles :                  css-files
  outputDirPath :             output-dir-path
  documentRootDirPath :       document-root-dir-path
  logLevel :                  log-level
  spritePngDepth :            sprite-png-depth
  spritePngIe6 :              sprite-png-ie6
  cssFileEncoding :           css-file-encoding
  cssFileSuffix' :            css-file-suffix
```

#### `stdout` : (boolean) (Default: true) Pipe child stdout in current stdout
#### `stderr` : (boolean) (Default: true) Pipe child stderr in current stderr
#### `callback` : (function) (Default: noop) Callback when task id finished.
