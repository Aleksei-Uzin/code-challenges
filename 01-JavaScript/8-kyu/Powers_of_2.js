/**
 * Powers of 2
 * https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript
 *
 */

function powersOfTwo(n){
  const res = []
  
  for(let i = 0; i <= n; res.push(Math.pow(2, i++))); 
  
  return res
}
