/**
 * Multiply Adjacent Digits
 * https://www.codewars.com/kata/67191920c29c7e09d9f40707/train/javascript
 *
 */

const digitMultiplication = exp => {
  const multipliedExp = exp.replace(/\d{2,}/g, m => {
    let res = 1

    for (let n of m) {
      res *= n
    }

    return res
  })

  return eval(multipliedExp)
}
