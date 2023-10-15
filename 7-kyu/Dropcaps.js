/**
 * Dropcaps
 * https://www.codewars.com/kata/559e5b717dd758a3eb00005a/train/javascript
 *
 */

const dropCap = str =>
  str
    .replace(/\b\w{3,}/g, val => val.toLowerCase())
    .replace(/\b\w(?=\w{2,})/g, val => val.toUpperCase())

// Best
//
// const dropCap = n =>
//   n.replace(/\b(\w)(\w{2,})/g, (_, $1, $2) => $1.toUpperCase() + $2.toLowerCase());
