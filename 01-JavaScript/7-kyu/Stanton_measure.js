/**
 * Stanton measure
 * https://www.codewars.com/kata/59a1cdde9f922b83ee00003b/train/javascript
 *
 */

const stantonMeasure = arr => {
  const n = arr.filter(val => val === 1).length

  return arr.filter(val => val === n).length
}
