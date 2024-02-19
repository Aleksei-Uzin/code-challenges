/**
 * If you can read this...
 * https://www.codewars.com/kata/586538146b56991861000293/train/javascript
 *
 */

// NATO - preloaded object
const to_nato = words =>
  words
    .toLowerCase()
    .match(/[a-z,.!?]/g)
    .map(val => NATO[val] ?? val)
    .join(" ")
