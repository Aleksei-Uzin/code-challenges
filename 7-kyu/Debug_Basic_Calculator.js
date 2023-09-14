/**
 * Debug Basic Calculator
 * https://www.codewars.com/kata/56368f37d464c0a43c00007f/train/javascript
 *
 */

const calculate = (a, o, b) => {
  if (o === "+") return a + b
  if (o === "-") return a - b
  if (o === "*") return a * b
  if (o === "/" && b !== 0) return a / b
  
  return null  
}
