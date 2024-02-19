/**
 * To square(root) or not to square(root)
 * https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
 *
 */

function squareOrSquareRoot(array) {
  return array.map(x => {
    const sqrt = Math.sqrt(x)
    const ceil = Math.ceil(sqrt)
    const pow = Math.pow(ceil, 2)
    const hasSQRT = pow === x
    
    return hasSQRT ? sqrt : Math.pow(x, 2)
  })
}
