/**
 * String Breakers
 * https://www.codewars.com/kata/59d398bb86a6fdf100000031/train/javascript
 *
 */

const stringBreakers = (n, string) => {
  const newStr = string.replace(/\s/g, '')

  if (newStr.length <= n) return newStr

  return `${newStr.slice(0, n)}\n${stringBreakers(n, newStr.slice(n))}`
}
