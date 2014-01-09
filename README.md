# StringifyStream

Stringify a binary stream into strings

[![NPM](https://nodei.co/npm/stringify-stream.png)](https://nodei.co/npm/stringify-stream/)

[![Build Status](https://travis-ci.org/nisaacson/stringify-stream.png)](https://travis-ci.org/nisaacson/stringify-stream)
[![Dependency Status](https://david-dm.org/nisaacson/stringify-stream/status.png)](https://david-dm.org/nisaacson/stringify-stream)
[![Code Climate](https://codeclimate.com/github/nisaacson/stringify-stream.png)](https://codeclimate.com/github/nisaacson/stringify-stream)

# Installation
```bash
npm install -S stringify-stream
```

# Usage

Create an instance of Stringify and pipe a readable stream of objects into that instance

```javascript
var StringifyStream = require('stringify-stream')
// stringify is an instance of require('stream').Transform
var stringifyStream = new StringifyStream()

var readStream = {} // a stream of buffer objects
var stringify = readStream.pipe(stringifyStream)
stringify.on('data', function(chunk) {
  console.dir(chunk) // json string
})
stringify.on('finish', function() {
  console.log('finish event called, all objects stringified')
})
```



