/**
 * Extra Perfect Numbers (Special Numbers Series #7)
 * https://www.codewars.com/kata/5a662a02e626c54e87000123/train/javascript
 *
 */

const extraPerfect = n => {
  const res = []

  for (let i = 1; i <= n; i += 2) res.push(i)

  return res
}
