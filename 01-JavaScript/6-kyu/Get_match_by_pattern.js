/**
 * Get match by pattern
 * https://www.codewars.com/kata/637d1d6303109e000e0a3116/train/javascript
 *
 */

const findMatchedByPattern =
  ([a, b, c]) =>
  str =>
    new RegExp(`^[^${b}${c}]*${a}[^${c}]*${b}.*${c}`).test(str)
