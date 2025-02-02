/**
 * "Very Even" Numbers.
 * https://www.codewars.com/kata/58c9322bedb4235468000019/train/javascript
 *
 */

const isVeryEvenNumber = n => {
  if (n < 10) return n % 2 === 0

  let newN = 0

  for (let val of String(n)) {
    newN += parseInt(val)
  }

  return isVeryEvenNumber(newN)
}
