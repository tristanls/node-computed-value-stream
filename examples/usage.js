/*
 * usage.js: Simple usage example
 *
 * (C) 2013 Tristan Slominski
 */
"use strict";

var ComputedValueStream = require('../index.js');

var cps = new ComputedValueStream();

console.log(cps.value);
// -> undefined

cps.write({my: 'object'});
console.log(cps.value);
// -> { my: 'object' }

cps.on('update', function(updatedValue) {
  console.log('update:', updatedValue);
});

cps.write({another: 'thing'});
// -> update: { another : 'thing' }