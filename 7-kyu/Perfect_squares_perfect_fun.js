/**
 * Perfect squares, perfect fun
 * https://www.codewars.com/kata/5705ca6a41e5be67720012c0/train/javascript
 *
 */

const squareIt = int => {
  const str = int.toString()
  const len = str.length
  const sqrt = Math.sqrt(len)
  const isPerfectSquare = Number.isInteger(sqrt)
  const arr = []
  
  if(!isPerfectSquare) {
    return 'Not a perfect square!'
  }

  for(let i = 0; i < len; i += sqrt) {
    arr.push(str.substring(i, i + sqrt))
  }

  return arr.join('\n')
}
