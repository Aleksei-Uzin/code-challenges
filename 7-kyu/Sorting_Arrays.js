/**
 * Sorting Arrays
 * https://www.codewars.com/kata/57fe864854685b1c420002e0/train/javascript
 *
 */

const sortArray = (a1, a2) => {
  const res = []
  
  a1.forEach(x => {
    const element = a2.find(elem => elem[0] === x[0])
    res.push(element)
  })
  
  return res
}
