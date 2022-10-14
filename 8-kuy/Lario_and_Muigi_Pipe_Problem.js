/**
 * Lario and Muigi Pipe Problem
 * https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/56b29582461215098d00000f/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * 
 */

function pipeFix(numbers){
  let firstElement = numbers[0]
  const lastElement = numbers[numbers.length - 1]
  const fixedArray = []
  const fixedArrayLength = lastElement - firstElement
  let i = 0

  for(i; i <= fixedArrayLength; i++) {
    fixedArray[i] = firstElement++
  }

  return fixedArray
}
