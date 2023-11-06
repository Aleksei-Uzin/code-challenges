/**
 * Return pyramids
 * https://www.codewars.com/kata/5a1c28f9c9fc0ef2e900013b/train/javascript
 *
 */

const pyramid = n => {
  let res = ''

  for (let i = 1, mid = 0; i <= n; i++, mid += 2) {
    const space = ' '.repeat(n - i)

    if (i === 1) {
      res += `${space}/\\\n`
    } else if (i < n) {
      res += `${space}/${' '.repeat(mid)}\\\n`
    } else {
      res += `/${'_'.repeat(mid)}\\\n`
    }
  }

  return res
}
