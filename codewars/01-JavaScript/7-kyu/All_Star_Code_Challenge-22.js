/**
 * All Star Code Challenge #22
 * https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript
 *
 */

const toTime = s => {
  const hh = ~~(s / 3600)
  const mm = ~~((s % 3600) / 60)

  return `${hh} hour(s) and ${mm} minute(s)`
}
