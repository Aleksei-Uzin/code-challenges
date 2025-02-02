/**
 * The Office V - Find a Chair 
 * https://www.codewars.com/kata/57f6051c3ff02f3b7300008b/train/javascript
 *
 */

const meeting = (x, need) => {
  if(!need) {
    return 'Game On'
  }
  
  const arr = x.map(([occ, chairs]) => chairs > occ.length ? chairs - occ.length : 0)
  const res = []
  let sum = 0

  arr.forEach(val => {
    const score = sum + val <= need ? val : need - sum

    if(sum < need) {
      sum += score
      res.push(score)
    }
  })
  
  return sum === need ? res : 'Not enough!'
}
