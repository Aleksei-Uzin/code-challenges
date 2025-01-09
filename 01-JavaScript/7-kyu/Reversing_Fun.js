/**
 * Reversing Fun
 * https://www.codewars.com/kata/566efcfbf521a3cfd2000056/train/javascript
 *
 */

const flipNumber = s => {
  for (let i = 0; i < s.length; i++) {
    const subStr = s.substring(0, i)
    const arr = [...s.substring(i)].reverse()
    s = `${subStr}${arr.join('')}`
  }

  return s
}
