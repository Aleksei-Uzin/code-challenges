/**
 * Shortest code: Give me the equation
 * https://www.codewars.com/kata/56fa24b10ba33be7d4000315/train/javascript
 *
 */

const sc = (...r) => {
  const [a, b, c] = r.sort((a, b) => a - b)

  for (let o of '+-*/') {
    if (eval(a + o + b) === c) return a + o + b + '=' + c
  }

  return ''
}
