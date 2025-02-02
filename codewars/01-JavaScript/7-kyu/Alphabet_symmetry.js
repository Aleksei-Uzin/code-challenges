/**
 * Alphabet symmetry
 * https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript
 *
 */

const solve = (arr) =>
  arr.map((val) =>
    val
      .toLowerCase()
      .split("")
      .reduce(
        (acc, char, i) => (i === char.charCodeAt(0) % 97 ? (acc += 1) : acc),
        0
      )
  )
