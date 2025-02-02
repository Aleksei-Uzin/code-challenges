/**
 * Cat Years, Dog Years (2)
 * https://www.codewars.com/kata/5a6d3bd238f80014a2000187/train/javascript
 *
 */

const ownedCatAndDog = (catYears, dogYears) => [
  calc(catYears, 'cat'),
  calc(dogYears),
]
const calc = (y, t) => {
  let res = (y -= 15) >= 0 ? 1 : 0

  if ((y -= 9) >= 0) res++

  do {
    y -= t === 'cat' ? 4 : 5
    if (y >= 0) res++
  } while (y > 0)

  return res
}
