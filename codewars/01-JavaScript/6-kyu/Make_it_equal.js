/**
 * Make it equal
 * https://www.codewars.com/kata/5736b7b749fc585e8900001f/train/javascript
 *
 */

const a = {
  value: 2,
  [Symbol.toPrimitive](hint) {
    return this.value++
  },
}
