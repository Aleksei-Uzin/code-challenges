/**
 * Describe a list
 * https://www.codewars.com/kata/57a4a3e653ba3346bc000810/train/javascript
 *
 */

const describeList = x => {
  const len = x.length
  return len > 1 ? 'longer' : len ? 'singleton' : 'empty'
}
