var ansi = require('ansi');
var cursor = ansi(process.stdout);
cursor.beep();
//
var colors = require('colors');
var request = require('request');

request.get('http://nodeguide.ru/').pipe(
    request.put('https://nodejs.org/api/stream.html')
);
console.log(request + 'request'.green);

/*
var Lazy = require('lazy');

var lazy = new Lazy;
lazy
  .filter(function (item) {
    return item % 2 == 0
  })
  .take(5)
  .map(function (item) {
    return item*2;
  })
  .join(function (xs) {
    console.log(xs);
  });
  //
  var express = require('express');
var app = express.createServer();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000);

  // Promt example
var prompt = require('prompt');

prompt.get(['first_name', 'last_name'], function (err, result) {
    console.info('Command-line input received:');
    console.log('  first_name: ' + result.first_name);
    console.error('  last_name: ' + result.last_name);
});

prompt.start();
*/