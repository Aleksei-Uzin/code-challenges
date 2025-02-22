/**
 * String subpattern recognition II
 * https://www.codewars.com/kata/5a4a391ad8e145cdee0000c4/train/javascript
 *
 */

const hasSubpattern = str => {
  if (/^(.*)\1+$/.test(str)) return true

  const calc = {}

  for (let s of str) {
    if (!calc[s]) calc[s] = 1
    else calc[s] += 1
  }

  const count = Object.values(calc)

  if (count.some(n => n === 1)) {
    return false
  } else {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
    const [a, b, ...rest] = count.sort((a, b) => a - b)
    const g = gcd(a, b)
    return g !== 1 ? rest.every(n => Number.isInteger(n / g)) : false
  }
}
