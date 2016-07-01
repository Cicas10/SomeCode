'use strict';
const EventEmitter = require('events');
const util = require('util');

//
// function MyEmitter() {
// };
//
// util.inherits(MyEmitter, EventEmitter);

class MyEmitter extends EventEmitter {};
var myEmitter = new MyEmitter();
myEmitter.on('tick', (count) => {
  console.log('an event occurred!' + count);
});

var count = 0;
(function everyOneSec() {
  setTimeout(function () {
    count++;
    myEmitter.emit('tick', count);
    everyOneSec();
  }, 1000);
})();
