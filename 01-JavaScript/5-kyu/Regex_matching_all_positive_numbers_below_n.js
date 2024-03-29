/**
 * Regex matching all positive numbers below n
 * https://www.codewars.com/kata/615da209cf564e0032b3ecc6/train/javascript
 *
 */

const regexBelow = n => {
  const str = n.toString()
  const len = str.length

  if (n === 1) return '^\\D$'
  if (len === 1) return `^[1-${n - 1}]$`

  const res = [`([1-9]\\d{0,${len - 2}})`]

  for (let i = 0; i < len; i++) {
    if (i === 0) {
      const last = +str.slice(-1)
      if (last) res.push(`(${str.slice(0, -1)}[0-${last - 1}])`)
    } else if (i < len - 1) {
      const curr = +str[i]
      if (curr)
        res.push(`(${str.slice(0, i)}[0-${curr - 1}]\\d{0,${len - i - 1}})`)
    } else {
      const first = +str.slice(0, 1)
      if (first !== 1) {
        res.push(`([1-${first - 1}]\\d{0,${len - 1}})`)
      }
    }
  }

  return `^(${res.join('|')})$`
}
