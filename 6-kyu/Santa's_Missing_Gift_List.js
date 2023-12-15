/**
 * Santa's Missing Gift List
 * https://www.codewars.com/kata/5665d30b3ea3d84a2c000025/train/javascript
 *
 */

// GIFTS - preloaded object
const gifts = (num, res = []) => {
  if (GIFTS.hasOwnProperty(num)) {
    res.push(GIFTS[num])
    return res.sort()
  }

  let n = 0

  for (let i = 2; n < num; i++) {
    n = 2 ** i
  }

  res.push(GIFTS[n / 2])
  return gifts(num - n / 2, res)
}
