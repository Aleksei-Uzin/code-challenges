/**
 * Shortest Code: Trypophobia
 * https://www.codewars.com/kata/56fe107569510b1b1b0002a5/train/javascript
 *
 */

sc = a => {
  let c = a.reduce((c, s) => (s.map(n => c[n] = c[n] ? c[n] + 1 : 1), c), {})
  let m = Math.max(...Object.values(c))

  return a.map(s => s.filter(n => c[n] !== m))
}