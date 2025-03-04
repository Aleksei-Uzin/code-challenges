/**
 * Coding 3min: Trypophobia
 * https://www.codewars.com/kata/56fe9ffbc25bf33fff000f7c/train/javascript
 *
 */

const sc = arr => {
  const calc = arr.reduce(
    (c, s) => (s.map(n => (c[n] = c[n] ? c[n] + 1 : 1)), c),
    {}
  )
  const max = Math.max(...Object.values(calc))

  return arr.map(s => s.filter(n => calc[n] !== max))
}
