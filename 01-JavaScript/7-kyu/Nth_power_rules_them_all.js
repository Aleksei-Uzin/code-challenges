/**
 * Nth power rules them all!
 * https://www.codewars.com/kata/58aed2cafab8faca1d000e20/train/javascript
 *
 */

const modifiedSum = (a, n) => a.reduce((acc, val) => acc + (val ** n - val), 0)
