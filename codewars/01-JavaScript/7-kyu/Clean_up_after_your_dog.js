/**
 * Clean up after your dog
 * https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript
 *
 */

const crap = (x, bags, cap) => {
  let totalCap = bags * cap
  const n1 = x.length
  const n2 = x[0].length
  let res = 'Clean'

  for (let i = 0; i < n1 * n2; i++) {
    const val = x[Math.floor(i / n2)][i % n2]

    if (val === '@') {
      totalCap -= 1
    }

    if (val === '@' && totalCap <= 0) {
      res = 'Cr@p'
    }

    if (val === 'D') {
      return 'Dog!!'
    }
  }

  return res
}
