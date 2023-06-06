/**
 * Odd-heavy Array
 * https://www.codewars.com/kata/59c7e477dcc40500f50005c7/train/javascript
 *
 */

const isOddHeavy = arr => {
  const getEven = n => n % 2 === 0
  const getOdd = n => !getEven(n)

  if(!arr.length || arr.every(getEven)) return false

  const evenMax = Math.max(...arr.filter(getEven))
  const oddMin = Math.min(...arr.filter(getOdd))

  return oddMin > evenMax
}
