/**
 * One Line Task: Strange Compare
 * https://www.codewars.com/kata/590ac5d9d1d7061409000014/train/javascript
 *
 */

strangeCompare = (a, k) =>
  a.sort((f = (x, y) => (~~x % 10) - (~~y % 10) || f(x / 10, y / 10)))[k]
