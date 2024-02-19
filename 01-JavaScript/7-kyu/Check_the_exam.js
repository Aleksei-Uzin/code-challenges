/**
 * Check the exam
 * https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript
 *
 */

const checkExam = (array1, array2) => {
  let res = 0
  
  array2.forEach((val, i) => {
    if(val && val !== array1[i]) res -= 1
    else if(val === array1[i]) res += 4
  })
  
  return res > 0 ? res : 0
}
