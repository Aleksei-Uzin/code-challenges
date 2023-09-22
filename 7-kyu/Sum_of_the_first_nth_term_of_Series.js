/**
 * Sum of the first nth term of Series
 * https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
 *
 */

const SeriesSum = n => {
  let res = 0
  let sum = 1
  
  for(let i = 0; i < n; i++) {
    i > 0 ? sum += 3 : 1
    res = res + (1 / sum)
  }
  
  return res.toFixed(2)
}
