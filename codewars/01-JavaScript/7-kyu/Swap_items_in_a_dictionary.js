/**
 * Swap items in a dictionary
 * https://www.codewars.com/kata/5a21e090f28b824def00013c/train/javascript
 *
 */

const switchDict = dic => {
  const res = {}

  for (let [key, val] of Object.entries(dic)) {
    if (Object.hasOwn(res, val)) res[val].push(key)
    else res[val] = [key]
  }

  return res
}
