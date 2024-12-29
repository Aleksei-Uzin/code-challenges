/**
 * Well of Ideas - Harder Version
 * https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/javascript
 *
 */

const well = x => {
  let count = 0

  for (let i = 0; i < x.length; i++) {
    for (let val of x[i]) {
      if (/good/i.test(val)) count += 1
      if (count > 2) return 'I smell a series!'
    }
  }

  return count > 0 ? 'Publish!' : 'Fail!'
}
