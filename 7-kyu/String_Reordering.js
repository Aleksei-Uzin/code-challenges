/**
 * String Reordering
 * https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript
 *
 */

const sentence = list => {
  const res = []

  for (let i = 0; i < list.length; i++) {
    res.push(...Object.entries(list[i]))
  }
  return res
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .map(([_, val]) => val)
    .join(' ')
}
