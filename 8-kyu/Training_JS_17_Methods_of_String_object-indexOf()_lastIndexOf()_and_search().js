/**
 * Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
 * https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
 *
 */

const firstToLast = (str, c) => {
  const first = str.search(c)
  const last = str.lastIndexOf(c)
  
  return first > -1 ? last - first : first
}
