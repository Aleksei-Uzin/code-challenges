/**
 * Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
 * https://www.codewars.com/kata/57256064856584bc47000611/train/javascript
 *
 */

const howManySmaller = (arr, n) => arr.filter(x => parseFloat(x.toFixed(2)) < n).length
