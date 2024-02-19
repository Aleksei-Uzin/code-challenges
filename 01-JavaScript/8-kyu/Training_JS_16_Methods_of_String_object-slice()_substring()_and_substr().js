/**
 * Training JS #16: Methods of String object--slice(), substring() and substr()
 * https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript
 *
 */

const cutIt = arr => {
  let min = Infinity
  
  arr.forEach(x => {
    if(x.length < min) min = x.length
  })
  
  return arr.map(x => x.slice(0, min))
}
