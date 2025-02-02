/**
 * Two numbers are positive
 * https://www.codewars.com/kata/602db3215c22df000e8544f0/train/javascript
 *
 */

const twoArePositive = (...arr) => arr.filter(n => n > 0).length === 2
