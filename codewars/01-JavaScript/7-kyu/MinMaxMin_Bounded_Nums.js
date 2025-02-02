/**
 * MinMaxMin: Bounded Nums
 * https://www.codewars.com/kata/58d3487a643a3f6aa20000ff/train/javascript
 *
 */

const minMinMax = arr => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  let secondMin = min + 1

  while (true) {
    if (arr.indexOf(secondMin) === -1) break
    else secondMin += 1
  }

  return [min, secondMin, max]
}
