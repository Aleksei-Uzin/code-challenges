/**
 * Sum of Odd Cubed Numbers
 * https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript
 *
 */

const cubeOdd = arr => {
  if(arr.some(n => typeof n !== 'number')) return

  const oddNumbers = arr.filter(n => n % 2)
  const cubedOddNumbersSum = oddNumbers.reduce((acc, n) => acc + (n ** 3), 0)
  
  return cubedOddNumbersSum
}
