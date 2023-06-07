/**
 * Training JS #12: loop statement --for..in and for..of
 * https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
 *
 */

const giveMeFive = obj => {
  const arr = []
  
  for(let property in obj) {
    if(property.length === 5) arr.push(property)

    if(obj[property].length === 5) arr.push(obj[property])
  }
  
  return arr
}
