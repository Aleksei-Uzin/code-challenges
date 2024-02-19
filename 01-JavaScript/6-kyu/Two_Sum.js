/**
 * Two Sum
 * https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
 *
 */

const twoSum = (numb, target) => {
  const len = numb.length
  const res = []

  numb.forEach((x, i, arr) => {
    for(let k = 1; k <= len; k++) {
      if(res.length === 2) break

      if(x + arr[k] === target && i !== k) res.push(i, k)
    }
  })
  
  return res
}
