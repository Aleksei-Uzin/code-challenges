/**
 * Coding 3min : Jumping Dutch act
 * https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript
 *
 */

const sc = floor => {
  const repeat = n => "Aa~ ".repeat(n)
  
  if(floor <= 1) return ''
  
  if(floor <= 6) return `${repeat(--floor)}Pa! Aa!`
  
  return `${repeat(--floor)}Pa!`
}
