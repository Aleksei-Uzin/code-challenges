/**
 * Spot the Differences
 * https://www.codewars.com/kata/5881460c780e0dd207000084/train/javascript
 *
 */

const spot = (s1, s2) => {
  const res = []

  for (let [ind, val] of Object.entries(s1)) {
    if (val !== s2[ind]) {
      res.push(+ind)
    }
  }

  return res
}
