var sinon = require('sinon')
var fs = require('fs')
var path = require('path')
var expect = require('chai').expect
var ToStringStream = require('../')

describe('Stringify Test', function () {
  var filePath = path.join(__dirname, 'data/lorem.txt')
  expect(fs.existsSync(filePath), 'file not found at path: ' + filePath).to.be.true

  describe('given a binary stream', function () {

    it('should parse into string', function (done) {
      var stringify = new ToStringStream()
      expect(stringify).to.exist
      var inputStream = fs.createReadStream(filePath)
      var output = inputStream.pipe(stringify)
      var validateLineSpy = sinon.spy(validateLine)

      output.on('finish', finishHandler)
      output.on('readable', readableHandler)

      function validateLine(data) {
        expect(data).to.exist
        expect(data).to.be.an('string')
      }

      function readableHandler() {
        var data
        while (true) {
          data = output.read()
          if (!data) {
            break
          }
          validateLineSpy(data)

        }
      }

      function finishHandler() {
        expect(validateLineSpy.callCount).to.be.above(1)
        done()
      }

    })
  })

})
