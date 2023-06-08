/**
 * What is between?
 * https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript
 *
 */

const between = (a, b) => {
  const arr = []
  
  for(let i = a; i <= b; arr.push(i++));
  
  return arr
}
