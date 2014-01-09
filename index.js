var Transform = require('stream').Transform
var util = require('util')

function Stringify(opts) {
  opts = opts || {}
  opts.objectMode = true
  Transform.call(this, opts)
}

util.inherits(Stringify, Transform)

Stringify.prototype._transform = function transform(chunk, encoding, done) {
  this.push(chunk.toString())
  done()
}

module.exports = Stringify
