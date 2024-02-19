/**
 * Speed Control
 * https://www.codewars.com/kata/56484848ba95170a8000004d/train/javascript
 *
 */

const gps = (s, x) => {
  const deltaDist = []

  x.forEach((val, i, arr) => {
    if (arr[i + 1]) deltaDist.push((3600 * Math.abs(val - arr[i + 1])) / s)
  })

  return ~~Math.max(...deltaDist)
}
