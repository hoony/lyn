#!/usr/bin/env node

var minimist = require('minimist');
var leven = require('leven');
var EOL = require('os').EOL;
var exit = require('exit');
var cliclopts = require('cliclopts');

var bin = {
  "init": "./bin/init",
  "email": "./bin/email",
  "music": "./bin/music"
};

var argv = minimist(process.argv.slice(2));
var cmd = argv._[0];
var option = argv._[1];

if (!bin.hasOwnProperty(cmd)) {
  if (cmd) {
    console.error('Command not found: ' + cmd);
    var candidates = Object.keys(bin)
      .filter(function (key) {
        return leven(key, cmd) < 3;
      })
      .sort(function (a,b) {
        return leven(a, cmd) - leven(b, cmd);
      })
      .slice(0, 3);
    if(candidates.length > 0) {
      console.error(EOL + 'Did you mean:');
      candidates.forEach(function (candidate) {
        console.log('  ', candidate);
      });
    }
  } else {
    console.error("Usage: lyn <command> [<args>]" + EOL);
    console.error('where <command> is one of:');
    Object.keys(bin).forEach(function (key) {
      console.error('  ' + key);
    });
  }

  console.error(EOL + "Enter 'lyn <command> -h' for usage information");
  console.error("For an introduction to lyn see 'lyn help'");
  exit(1);
}

var cmdModule = require(bin[cmd]);
var clopts = cliclopts(cmdModule.options);

if(argv.h || argv.help) {
  var usage = cmdModule.usage;

  if(usage) { // if it doesn't export usage just continue
    console.log('Usage:', usage, EOL);
    clopts.print();
    exit();
  }
}

cmdModule(option);
