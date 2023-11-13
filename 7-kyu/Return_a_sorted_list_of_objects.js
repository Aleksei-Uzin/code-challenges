/**
 * Return a sorted list of objects
 * https://www.codewars.com/kata/52705ed65de62b733f000064/train/javascript
 *
 */

const sortList = (sortBy, list) =>
  list.sort(({ [sortBy]: a }, { [sortBy]: b }) => b - a)
