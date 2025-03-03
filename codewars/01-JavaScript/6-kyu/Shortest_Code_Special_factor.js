/**
 * Shortest Code : Special factor
 * https://www.codewars.com/kata/570dff30e6e9284ba3000a8f/train/javascript
 *
 */

sc = (n, f = []) => {
  for (let i = 1; i <= n; i++) !(n % i) && f.push(i)
  return f.filter(v => n.toString(2).includes(v.toString(2)))
}
