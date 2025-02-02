/**
 * Back and forth then Reverse!
 * https://www.codewars.com/kata/60cc93db4ab0ae0026761232/train/javascript
 *
 */

const arrange = s => {
  const len = s.length
  const c = Math.ceil(len / 2)
  const res = []

  for (let i = 0; i < c; i++) {
    const a = i % 2 ? s[len - i - 1] : s[i]
    const b = i % 2 ? s[i] : s[len - i - 1]

    if (i + 1 < c) res.push(a, b)
    else if (i + 1 === c && len % 2 === 0) res.push(a, b)
    else res.push(a)
  }

  return res
}
