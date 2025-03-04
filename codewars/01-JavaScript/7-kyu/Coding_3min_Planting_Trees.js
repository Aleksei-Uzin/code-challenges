/**
 * Coding 3min : Planting Trees
 * https://www.codewars.com/kata/5710443187a36a9cee0005a1/train/javascript
 *
 */

const sc = (w, l, g) => {
  const calc = (2 * (w + l - 2)) / (g + 1)
  return ~~calc - calc ? 0 : calc
}
