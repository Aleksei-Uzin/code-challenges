/**
 * Insert Dashes 2
 * https://www.codewars.com/kata/55c3026406402936bc000026/train/javascript
 *
 */

const insertDashII = num =>
  String(num)
    .replace(/([2468])(?=[2468])/g, '$1*')
    .replace(/([13579])(?=[13579])/g, '$1-')
