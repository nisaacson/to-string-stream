# To String Stream

Tranform a binary stream into strings

[![NPM](https://nodei.co/npm/to-string-stream.png)](https://nodei.co/npm/to-string-stream/)

[![Build Status](https://travis-ci.org/nisaacson/to-string-stream.png)](https://travis-ci.org/nisaacson/to-string-stream)
[![Dependency Status](https://david-dm.org/nisaacson/to-string-stream/status.png)](https://david-dm.org/nisaacson/to-string-stream)
[![Code Climate](https://codeclimate.com/github/nisaacson/to-string-stream.png)](https://codeclimate.com/github/nisaacson/to-string-stream)

# Installation
```bash
npm install -S to-string-stream
```

# Usage

Create an instance of to-string and pipe a readable stream of objects into that instance

```javascript
var ToStringStream = require('to-string-stream')
// to-string is an instance of require('stream').Transform
var opts = {
  highWaterMark: 2
}
var stringStream = new ToStringStream(opts) // opts is optional

var readStream = {} // a stream of buffer objects
var stringified = readStream.pipe(stringStream)
stringified.on('data', function(chunk) {
  console.dir(chunk) // json string
})
stringified.on('finish', function() {
  console.log('finish event called, all objects stringified')
})
```



