/**
 * Scaling Squared Strings
 * https://www.codewars.com/kata/56ed20a2c4e5d69155000301/train/javascript
 *
 */

const scale = (str, k, n) => {
  if (!str) return str

  const arr = str.split('\n')
  let res = []

  for (let i = 0; i < arr.length; i++) {
    let line = arr[i]
      .split('')
      .map(val => val.repeat(k))
      .join('')
    res.push(Array(n).fill(line).join('\n'))
  }

  return res.join('\n')
}
