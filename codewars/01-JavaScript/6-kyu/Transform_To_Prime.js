/**
 * Transform To Prime
 * https://www.codewars.com/kata/5a946d9fba1bb5135100007c/train/javascript
 *
 * https://www.geeksforgeeks.org/javascript-program-for-prime-numbers/
 *
 */

const isPrime = sum => {
  for (let i = 2; i < sum; i++)
    if (sum % i == 0) {
      return false
    }

  return true
}

const minimumNumber = numbers => {
  const sum = numbers.reduce((acc, val) => acc + val)
  let isSumPrime = isPrime(sum)
  let res = 0

  while (!isSumPrime) {
    res += 1
    isSumPrime = isPrime(sum + res)
  }

  return res
}
