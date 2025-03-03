/**
 * Shortest Code : Remove screws I
 * https://www.codewars.com/kata/57109bf197b4b3853a000274/train/javascript
 *
 */

sc = c => [...c].reduce(([n, p], s) => [n += !p ? 1 : p == s ? 2 : 7, s], [0, ''])[0]
