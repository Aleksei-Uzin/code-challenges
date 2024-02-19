/**
 * Olympic Rings
 * https://www.codewars.com/kata/57d06663eca260fe630001cc/train/javascript
 *
 */

const olympicRing = a => {
  let rings = 0

  for (let item of a) {
    if (item === 'B') rings += 2
    if (/[aAbdDegoOpPqQR]/.test(item)) rings += 1
  }

  const score = ~~(rings / 2)

  if (score > 3) return 'Gold!'
  else if (score === 3) return 'Silver!'
  else if (score === 2) return 'Bronze!'
  else return 'Not even a medal!'
}
