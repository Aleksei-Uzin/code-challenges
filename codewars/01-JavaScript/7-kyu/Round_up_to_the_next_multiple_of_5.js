/**
 * Round up to the next multiple of 5
 * https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript
 *
 */

const roundToNext5 = n => (n % 5 === 0 ? n : roundToNext5(n + 1))
