/**
 * Array.prototype.splice(from, count, insertItems...)
 * https://www.codewars.com/kata/52c82f219e8eaab84700025f/train/javascript
 *
 */

Array.prototype.splice = function (from, count = 0, ...itsertItems) {
  const deleteCount = from + count
  const deletedItems = this.slice(from, deleteCount)
  const restItemsCopy = this.slice(deleteCount)
  this.length = from
  this.push(...itsertItems, ...restItemsCopy)

  return deletedItems
}
