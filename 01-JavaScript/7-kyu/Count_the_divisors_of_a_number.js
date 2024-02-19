/**
 * Count the divisors of a number
 * https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
 * 
 * https://www.geeksforgeeks.org/count-divisors-n-on13/
 *
 */

const getDivisorsCnt = n => {
  let cnt = 0

  for(let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      n / i === i ? cnt++ : cnt += 2
    }
  }

  return cnt
}
