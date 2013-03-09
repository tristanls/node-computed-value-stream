/*
 * index.js: Writable stream that emits 'update' event instead of writing
 *
 * (C) 2013 Tristan Slominski
 */
"use strict";

var stream = require('stream'),
    util = require('util');

function ComputedValueStream(options) {
  options = options || {};
  if (typeof options.objectMode == 'undefined') options.objectMode = true;

  stream.Writable.call(this, options);
};

util.inherits(ComputedValueStream, stream.Writable);

ComputedValueStream.prototype._write = function _write(chunk, encoding,
    callback) {
  this.value = chunk;
  this.emit('update', chunk);
  callback();
};

module.exports = ComputedValueStream;