/**
 * Count words
 * https://www.codewars.com/kata/56b3b27cadd4ad275500000c/train/javascript
 *
 */

const wordCount = str =>
  str
    .split(/[^a-z]+/gi)
    .filter(
      val => val.length > 0 && !/^(a|the|on|at|of|upon|in|as)$/i.test(val)
    ).length
