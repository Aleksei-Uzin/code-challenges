/**
 * The Feast of Many Beasts
 * https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript
 *
 */

function feast(beast, dish) {
  const first = beast.slice(0, 1)
  const last = beast.slice(-1)
  const reg = new RegExp('^' + first + '.+' + last + '$')

  return reg.test(dish)
}
