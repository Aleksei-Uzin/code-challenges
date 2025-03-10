/**
 * Arrays are Objects
 * https://www.codewars.com/kata/552fc8d81b59b6b4820000a4/train/javascript
 *
 */

const fn = {
  getFiltered(predicate) {
    return magicArray(...this.filter(predicate))
  },
  getRejected(predicate) {
    return magicArray(...this.filter(item => !predicate(item)))
  },
  getSplit(predicate) {
    return {
      pass: this.getFiltered(predicate),
      fail: this.getRejected(predicate),
    }
  },
  count() {
    return this.length
  },
  double() {
    return this.reduce((acc, val) => (acc.push(val), acc), this)
  },
  multiply(n) {
    return magicArray(...this.map(val => (Number.isNaN(val) ? val : val * n)))
  },
  first() {
    return magicArray(...this.slice(0, 1))
  },
  last() {
    return magicArray(...this.slice(-1))
  },
  eq(n) {
    return magicArray(...this.slice(n, n + 1))
  },
}

function magicArray(args) {
  const arr = Array.isArray(args) ? args : [...arguments]
  return Object.assign(arr, fn)
}
