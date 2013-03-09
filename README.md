# computed-value-stream

    Stability: 1 - Experimental

_Stability as defined by [Node.js](http://nodejs.org/api/documentation.html#documentation_stability_index)_

A writable stream with `objectMode=true` that emits `update` events instead of writing to the stream buffer. Additionally, it stores the latest object in a property called `value`.

## Installation

    npm install computed-value-stream

## Usage

```javascript
var ComputedValueStream = require('computed-value-stream');

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
```