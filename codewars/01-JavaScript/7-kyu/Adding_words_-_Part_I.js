/**
 * Adding words - Part I
 * https://www.codewars.com/kata/592eaf848c91f248ca000012/train/javascript
 *
 */

class Arith {
  #numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
  }

  constructor(val) {
    this.n = this.#numbers[val]
  }

  add(num) {
    const res = this.n + this.#numbers[num]
    return Object.keys(this.#numbers)[res]
  }
}
