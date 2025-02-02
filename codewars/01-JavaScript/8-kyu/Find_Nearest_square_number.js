/**
 * Find Nearest square number
 * https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/train/javascript
 *
 */

const nearestSq = n => {
  const sqrt = Math.sqrt(n)
  
  if(Number.isInteger(sqrt)) return n
  
  const n1 = Math.ceil(sqrt)
  const n2 = Math.floor(sqrt)
  const n1Pow = n1 ** 2
  const n2Pow = n2 ** 2
  const n1Range = Math.abs(n - n1Pow)
  const n2Range = Math.abs(n - n2Pow)
  
  return n1Range < n2Range ? n1Pow : n2Pow
}
