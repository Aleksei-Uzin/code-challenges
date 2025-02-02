/**
 * Noonerize Me
 * https://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd/train/javascript
 *
 */

const noonerize = numbers => {
  const isValidArr =
    numbers.length === 2 && numbers.every(n => typeof n === 'number')

  if (!isValidArr) return 'invalid array'

  const str = numbers.join(' ').replace(/(\b\w)(\w+) (\b\w)(\w+)/, '$3$2 $1$4')
  const [num1, num2] = str.split(' ').map(Number)

  return Math.abs(num1 - num2)
}
