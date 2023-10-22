/**
 * Common array elements
 * https://www.codewars.com/kata/5a6225e5d8e145b540000127/train/javascript
 *
 */

const common = (a, b, c) => {
  let res = 0

  a.forEach(val => {
    if (b.includes(val) && c.includes(val)) {
      b[b.indexOf(val)] = c[c.indexOf(val)] = 0
      res += val
    }
  })

  return res
}

// Best Practice
//
// const common = (a,b,c) => {
//   [a,b,c] = [a,b,c].map(el => el.reduce((sum, num) => (sum[num] = (sum[num] || 0) + 1, sum), {}));
//   return Object.keys(a).reduce((sum, key) => sum + Math.min(a[key]||0, b[key]||0, c[key]||0) * key, 0);
// }
