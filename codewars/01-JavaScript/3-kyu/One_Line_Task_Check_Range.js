/**
 * One Line Task: Check Range
 * https://www.codewars.com/kata/591e833267cd75cb02000007/train/javascript
 *
 */

checkRange = (b, a, c, d = 0) => b.map(b => (d += a > b == b > c)) | d
