/**
 * The sortReloaded() method
 * https://www.codewars.com/kata/5610a8eeb9a84d624b000005/train/javascript
 *
 */

Array.prototype.sortReloaded = function(dir = 'asc') {
  const compareAsc = (a, b) => a > b
  const compareDesc = (a, b) => !compareAsc(a, b)
  const copy = this.slice()

  if(dir === 'asc') {
    return copy.sort(compareAsc)
  }
  
  if(dir === 'desc') {
    return copy.sort(compareDesc)
  }

  return false
}
