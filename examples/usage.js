/*
 * usage.js: Simple usage example
 *
 * (C) 2013 Tristan Slominski
 */
"use strict";

var ComputedValueStream = require('../index.js');

var cvs = new ComputedValueStream();

console.log(cvs.value);
// -> undefined

cvs.write({my: 'object'});
console.log(cvs.value);
// -> { my: 'object' }

cvs.on('update', function(updatedValue) {
  console.log('update:', updatedValue);
});

cvs.write({another: 'thing'});
// -> update: { another : 'thing' }