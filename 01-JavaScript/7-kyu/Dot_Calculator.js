/**
 * Dot Calculator
 * https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/train/javascript
 *
 */

const dotCalculator = equation => {
  const [, s1, sign, s2] = /(\.+)\s([*\/+-]+)\s(\.+)/.exec(equation)
  const [n1, n2] = [s1.length, s2.length]

  switch (sign) {
    case '+':
      return '.'.repeat(n1 + n2)
    case '-':
      return '.'.repeat(n1 - n2)
    case '*':
      return '.'.repeat(n1 * n2)
    case '//':
      return '.'.repeat(n1 / n2)
  }
}
