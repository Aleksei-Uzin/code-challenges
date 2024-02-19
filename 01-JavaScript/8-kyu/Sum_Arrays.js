/**
 * Sum Arrays
 * https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
 *
 */

// A
function sum (numbers) {
  "use strict";
  return numbers.reduce((a, b) => a + b, 0)
}

// B
function sum (num) {
  "use strict";
  let sum = 0
  
  for(let i = 0; i < num.length; sum += num[i++]);
  
  return sum
}
