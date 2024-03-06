/**
 * Make the Deadfish Swim
 * https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript
 *
 */

const parse = data => {
  const res = []
  let n = 0

  for (let c of data) {
    if (c === 'i') n += 1
    if (c === 'd') n -= 1
    if (c === 's') n *= n
    if (c === 'o') res.push(n)
  }

  return res
}
