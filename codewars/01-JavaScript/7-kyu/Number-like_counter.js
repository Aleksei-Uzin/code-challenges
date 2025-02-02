/**
 * Number-like counter
 * https://www.codewars.com/kata/5313b713bb244a0eb20001fe/train/javascript
 *
 */

class Counter {
  constructor() {
    this.num = 0
  }

  incr() {
    return this.num++
  }

  valueOf() {
    return this.num
  }
}
