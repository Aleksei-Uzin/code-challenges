/**
 * Odd Not Prime
 * https://www.codewars.com/kata/5a9996fa8e503f2b4a002e7a/train/javascript
 *
 */

const oddNotPrime = n => {
  let res = 0

  for (let i = 1; i <= n; i += 2) {
    const sqrt = Math.sqrt(i)
    let isNotPrime = false

    for (let j = 2; j <= sqrt; j++) {
      if (i % j === 0) isNotPrime = true
    }

    if (i === 1 || isNotPrime) res++
  }

  return res
}
