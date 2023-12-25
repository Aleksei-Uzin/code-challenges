/**
 * Find Added
 * https://www.codewars.com/kata/58de77a2c19f096a5a00013f/train/javascript
 *
 */

const findAdded = (st1, st2) => {
  for (let item of st1) {
    if (st2.includes(item)) st2 = st2.replace(item, '')
  }

  return st2.split('').sort().join('')
}
