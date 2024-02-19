/**
 * Sparse array split function
 * https://www.codewars.com/kata/562518e2059c742d6900007d/train/javascript
 *
 */

Array.prototype.split = function () {
  const arr = this.filter((_, i) => this.hasOwnProperty(i))

  if (arr.length === this.length) return this

  const res = []

  for (let i = 0, k = null; i <= this.length; i++) {
    if (k === null && this.hasOwnProperty(i)) k = i

    if (!this.hasOwnProperty(i) && k !== null) {
      res.push(this.slice(k, i))
      k = null
    }
  }

  return res
}
