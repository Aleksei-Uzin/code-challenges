/**
 * One Line Task: Remove Zeros
 * https://www.codewars.com/kata/58fecb82f3dff0a347000018/train/javascript
 *
 */

removeZeros = a => eval('[' + /[^0,].*[^0,]/.exec(a) + ']')
