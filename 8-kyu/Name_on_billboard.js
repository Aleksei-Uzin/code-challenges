/**
 * Name on billboard
 * https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
 *
 */

const billboard = (name, price = 30) => {
  const len = name.length
  let res = 0
  
  for(let i = 0; i < len; i++) res += price;
  
  
  return res
}
