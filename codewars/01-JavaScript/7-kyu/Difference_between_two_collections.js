/**
 * Difference between two collections
 * https://www.codewars.com/kata/594093784aafb857f0000122/train/javascript
 *
 */

const diff = (a, b) => {
  const maxN = Math.max(a.length, b.length)
  const set = new Set()

  for (let i = 0; i < maxN; i++) {
    if (i in a && !b.includes(a[i])) {
      set.add(a[i])
    }

    if (i in b && !a.includes(b[i])) {
      set.add(b[i])
    }
  }

  return [...set].sort()
}
