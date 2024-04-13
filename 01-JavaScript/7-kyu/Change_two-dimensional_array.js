/**
 * Change two-dimensional array
 * https://www.codewars.com/kata/581214d54624a8232100005f/train/javascript
 *
 */

const matrix = arr =>
  arr.map((val, i) => {
    val[i] = val[i] >= 0 ? 1 : 0
    return val
  })
