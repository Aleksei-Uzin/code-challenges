/**
 * Streams - endless arrays
 * https://www.codewars.com/kata/52744341faf5480173000bc7/train/javascript
 *
 */

class Stream {
  constructor(start, output, stepping) {
    this.start = start
    this.output = output
    this.stepping = stepping
  }

  head() {
    return this.output(this.start)
  }

  tail() {
    return new Stream(this.stepping(this.start), this.output, this.stepping)
  }
}

// Another way to solve the problem
const Stream = function (start, output, stepping) {
  this.start = start
  this.output = output
  this.stepping = stepping
}

Stream.prototype = {
  head() {
    return this.output(this.start)
  },
  tail() {
    return new Stream(this.stepping(this.start), this.output, this.stepping)
  },
}
