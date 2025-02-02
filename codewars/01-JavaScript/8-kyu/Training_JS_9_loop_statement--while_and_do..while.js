/**
 * Training JS #9: loop statement --while and do..while
 * https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript
 *
 */

const padIt = (str, n) => {
  let isLeft = true
  let res = str
  let i = 0
  
  while(i < n) {
    if(isLeft) {
      res = '*'.concat(res)
      isLeft = !isLeft
    } else {
      res = res.concat('*')
      isLeft = !isLeft
    }

    i++
  }
    
  return res
}
