/**
 * Friday the 13th Part 1
 * https://www.codewars.com/kata/5925acf31a9825d616000e74/train/javascript
 *
 */

const killcount = (counselors, jason) =>
  counselors.filter(([_, n]) => n < jason).map(([name]) => name)
