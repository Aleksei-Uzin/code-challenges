/**
 * Thue-Morse Sequence
 * https://www.codewars.com/kata/591aa1752afcb02fa300002a/train/javascript
 *
 */

const thueMorse = n => {
  const res = [0]

  while (res.length < n) {
    res.push(...res.map(n => Number(!n)))
  }

  return res.slice(0, n).join('')
}
