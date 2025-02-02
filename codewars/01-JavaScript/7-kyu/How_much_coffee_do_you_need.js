/**
 * How much coffee do you need?
 * https://www.codewars.com/kata/57de78848a8b8df8f10005b1/train/javascript
 *
 */

const howMuchCoffee = events => {
  let res = 0

  for (let event of events) {
    if (/^(cw|cat|dog|movie)$/.test(event)) res += 1
    if (/^(CW|CAT|DOG|MOVIE)$/.test(event)) res += 2
  }

  return res <= 3 ? res : 'You need extra sleep'
}
