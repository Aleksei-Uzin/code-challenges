/**
 * One Line Task: Digits Average
 * https://www.codewars.com/kata/5a329437ee1aae536b0001cb/train/javascript
 *
 */

digitsAverage = f = b =>
  9 < b ? f(+[...(b += '')].map((a, d) => (a - -b[d - 1] + 1) >> 1).join``) : b
