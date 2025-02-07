/**
 * One Line Task: Palindrome String
 * https://www.codewars.com/kata/58b57f984f353b3dc9000030/train/javascript
 *
 */

palindrome = f = (n, [c, ...r]) =>
  r.length ? c + f(n - 2, r) + c : c.repeat(n)
