/**
 * How much water do I need?
 * https://www.codewars.com/kata/575fa9afee048b293e000287/train/javascript
 *
 */

function howMuchWater(water, load, clothes) {
  if(clothes > load * 2) return 'Too much clothes'
  
  if(clothes < load) return 'Not enough clothes'
  
  return +(water * 1.1 ** (clothes - load)).toFixed(2)
}
