/**
 * Remove duplication
 * https://www.codewars.com/kata/5904d222e1bfd3354e000026/train/javascript
 *
 */

const removeDuplication = arr =>
  arr.filter(val => arr.indexOf(val) === arr.lastIndexOf(val))
