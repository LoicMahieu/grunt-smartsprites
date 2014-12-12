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
        // smartspritePath : 'smartsprites.cmd',
        rootDirPath: config.src + 'style/source/',
        outputDirPath: config.src +  'style/',
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

