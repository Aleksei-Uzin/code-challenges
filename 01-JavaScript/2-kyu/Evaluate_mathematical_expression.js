/**
 * Evaluate mathematical expression
 * https://www.codewars.com/kata/52a78825cdfc2cfc87000005/train/javascript
 *
 */

const calc = exp => {
  const parensSumOrSub = /\((-?\s?\d+\.?\d*)\s*(\+|\-)\s*(-?\s?\d+\.?\d*)\)/g
  const multOrDiv = /(-?\s?\d+\.?\d*)\s*(\*|\/)\s*(-?\s?\d+\.?\d*)/g
  const sumOrSub = /(-?\s?\d+\.?\d*)\s*(\+|\-)\s*(-?\s?\d+\.?\d*)/g

  exp = exp.replace(/\((-?\s?\d+\.?\d*)\)/g, '$1')
  exp = exp.replace(/\-\-(\d+\.?\d*)/g, '$1')

  while (parensSumOrSub.test(exp)) {
    exp = exp.replace(parensSumOrSub, (_, n1, sign, n2) =>
      makeCalc(+n1, +n2, sign)
    )
  }

  while (multOrDiv.test(exp)) {
    exp = exp.replace(multOrDiv, (_, n1, sign, n2) => makeCalc(+n1, +n2, sign))
  }

  if (parensSumOrSub.test(exp)) return calc(exp)

  while (sumOrSub.test(exp)) {
    exp = exp.replace(sumOrSub, (_, n1, sign, n2) => makeCalc(+n1, +n2, sign))
  }

  return isNaN(exp) ? calc(exp) : +exp
}
const makeCalc = (n1, n2, sign) => {
  switch (sign) {
    case '+':
      return n1 + n2
    case '-':
      return n1 - n2
    case '/':
      return n1 / n2
    case '*':
      return n1 * n2
  }
}
