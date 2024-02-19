/**
 * Array.prototype.splice(from, count, insertItems...) - Advanced
 * https://www.codewars.com/kata/53b30ccc4a24088126000c45/train/javascript
 *
 */

Array.prototype.splice = function (from, count = 0, ...itsertItems) {
  count = count < this.length ? count : this.length - from
  const deleteCount = from + count
  const newLen = this.length - count + itsertItems.length
  const deletedItems = []
  const restItemsCopy = []

  for (let i = from, j = 0; i < deleteCount; i++, j++) {
    deletedItems[j] = this[i]
  }

  for (let i = deleteCount, j = 0; i < this.length; i++, j++) {
    restItemsCopy[j] = this[i]
  }

  this.length = from

  for (let i = 0; i < itsertItems.length; i++) {
    this[from + i] = itsertItems[i]
  }

  for (let i = this.length, j = 0; i < newLen; i++, j++) {
    this[i] = restItemsCopy[j]
  }

  return deletedItems
}
