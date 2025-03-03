/**
 * Shortest Code: Collatz Array(Split or merge)
 * https://www.codewars.com/kata/56fc7a29fca8b900eb001fac/train/javascript
 *
 */

sc = (a, n, s = []) => {
  if (!n) return a

  for (let i = 0; i < a.length; i++) {
    let c = a[i]
    s = s.concat(c % 2 ? c * 3 + 1 + (a[i += 1] || 0) : [c / 2, c / 2])
  }

  return sc(s, n - 1)
}
