/**
 * Find the divisors!
 * https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript
 *
 */

const divisors = int => {
  const res = []
  let i = 2

  while (i <= Math.sqrt(int)) {
    if (int % i === 0) {
      res.push(i)

      if (i != int / i) {
        res.push(int / i)
      }
    }

    i++
  }

  return res.length ? res.sort((a, b) => a - b) : `${int} is prime`
}
