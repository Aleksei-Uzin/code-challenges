/**
 * The average length
 * https://www.codewars.com/kata/5a430359e1ce0e35540000b1/train/javascript
 *
 */

const averageLength = arr => {
  const sum = arr.reduce((sum, str) => sum + str.length, 0)
  const avg = Math.round(sum / arr.length)

  return arr.map(str => (str.length !== avg ? str[0].repeat(avg) : str))
}
