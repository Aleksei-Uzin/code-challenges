/**
 * Fizz Buzz
 * https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript
 *
 */

const fizzbuzz = n => {
  const res = []
  
  for(let i = 1; i <= n; i++) {
    if(!(i % 3) && !(i % 5)) {
      res.push('FizzBuzz')
    } else if(!(i % 3)) {
      res.push('Fizz')
    } else if(!(i % 5)) {
      res.push('Buzz')
    } else {
      res.push(i)
    }
  }
  
  return res
}
