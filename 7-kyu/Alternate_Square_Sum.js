/**
 * Alternate Square Sum
 * https://www.codewars.com/kata/559d7951ce5e0da654000073/train/javascript
 *
 */

const alternateSqSum = arr =>
  arr.reduce(
    (acc, val, i) => ((i + 1) % 2 === 0 ? acc + val ** 2 : acc + val),
    0
  )
