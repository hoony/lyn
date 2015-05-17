module.exports = music;

var config = require('../config');
var shell = require('shelljs');
var glob = require('glob');
var fs = require('fs');
var mm = require('musicmetadata');

music.usage = ['lyn music', 'Rearrange music files by artists'].join(EOL);

var rootPath = config.music.fromPath;
var targetPath = config.music.targetPath;

function music () {
  var options = {
    'cwd': rootPath
  };

  glob('**/*.+(mp3|m4a)', options, function (err, files) {
    files.forEach(function (file) {
      var filePathForExec = rootPath + '"' + file + '"';
      var parser = mm(fs.createReadStream(rootPath + file), function (err, metadata) {
        if (err) throw err;
        shell.exec('mkdir ' + targetPath + '"' + metadata.artist + '"');
        shell.exec('mv ' + filePathForExec + ' ' + targetPath + '"' +
         metadata.artist + '/' + file + '"');
      });
    })

  })
}
