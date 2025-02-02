/**
 * Only Duplicates
 * https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript
 *
 */

const onlyDuplicates = str => {
  let res = ''

  for (let c of str) {
    if (str.match(new RegExp(c, 'g')).length > 1) res += c
  }

  return res
}
