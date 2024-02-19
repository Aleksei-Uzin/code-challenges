/**
 * Write Number in Expanded Form
 * https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
 *
 */

const expandedForm = num => {
  const str = num.toString()
  const res = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '0') res.push(str[i].padEnd(str.length - i, '0'))
  }

  return res.join(' + ')
}
