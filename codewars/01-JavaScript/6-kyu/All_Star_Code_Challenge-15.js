/**
 * All Star Code Challenge #15
 * https://www.codewars.com/kata/586560a639c5ab3a260000f3/train/javascript
 *
 */

const rotate = (str, res = []) => {
  if (res.length === str.length) return res

  const newStr = `${str.slice(1)}${str[0]}`

  return rotate(newStr, [...res, newStr])
}
