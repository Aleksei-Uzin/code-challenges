/**
 * Dinner Plans
 * https://www.codewars.com/kata/57212c55b6fa235edc0002a2/train/javascript
 *
 */

const commonGround = (s1, s2) => {
  const arr = s2.split(' ')
  const res = []

  for (let val of arr) {
    if (new RegExp('\\b' + val, 'g').test(s1)) res.push(val)
  }

  return res.length > 0 ? res.join(' ') : 'death'
}
