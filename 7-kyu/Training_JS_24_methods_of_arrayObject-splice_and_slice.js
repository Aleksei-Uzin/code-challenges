/**
 * Training JS #24: methods of arrayObject---splice() and slice()
 * https://www.codewars.com/kata/572cb264362806af46000793/train/javascript
 *
 */

const threeInOne = arr => {
  const copy = arr.slice()

  for (let i = 0, j = arr.length; j > 0; i++, j -= 3) {
    const [a, b, c] = copy.slice(i, i + 3)
    copy.splice(i, 3, a + b + c)
  }

  return copy
}
