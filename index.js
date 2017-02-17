var ansi = require('ansi');
var cursor = ansi(process.stdout);
cursor.beep();

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