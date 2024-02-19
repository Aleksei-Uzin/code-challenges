/**
 * The Deaf Rats of Hamelin
 * https://www.codewars.com/kata/598106cb34e205e074000031/train/javascript
 *
 */

const countDeafRats = town => {
  const [left, right] = town.replace(/\s/g, '').split('P')

  return count(left.split(''), 'l') + count(right.split(''))

  function count(part, side) {
    let n = 0

    part.forEach((val, i) => {
      if (side === 'l') {
        if (i % 2 === 0 && val !== '~') n++
      } else {
        if (i % 2 !== 0 && val !== '~') n++
      }
    })

    return n
  }
}
