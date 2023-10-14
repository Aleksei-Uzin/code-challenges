/**
 * Smallest value of an array
 * https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
 *
 */

const min = (arr, toReturn) => {
  const min = Math.min(...arr)

  return toReturn === 'index' ? arr.indexOf(min) : min
}
