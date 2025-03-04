/**
 * Coding 3min: Give me the equation
 * https://www.codewars.com/kata/56fe9b65cc08cafbc5000de3/train/javascript
 *
 */

const sc = (...rest) => {
  const [a, b, c] = rest.sort((a, b) => a - b)

  for (let sign of '+-*/') {
    if (eval(a + sign + b) === c) return a + sign + b + '=' + c
  }

  return ''
}
