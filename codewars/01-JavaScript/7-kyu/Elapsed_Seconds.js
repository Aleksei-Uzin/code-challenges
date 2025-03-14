/**
 * Elapsed Seconds
 * https://www.codewars.com/kata/517b25a48557c200b800000c/train/javascript
 *
 */

const elapsedSeconds = (startDate, endDate) =>
  (endDate.getTime() - startDate.getTime()) / 1000
