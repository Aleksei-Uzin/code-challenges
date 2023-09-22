/**
 * Greatest common divisor
 * https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript
 * https://www.freecodecamp.org/news/euclidian-gcd-algorithm-greatest-common-divisor/
 *
 */

const mygcd = (x, y) => y === 0 ? x : mygcd(y, x % y)
