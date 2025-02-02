/**
 * Sorting Arrays ... wait, what?!
 * https://www.codewars.com/kata/56bac4c34537cf1e270005a1/train/javascript
 *
 */

Array.prototype.sort = function () {
  for (let i = 0; i < this.length; i++) {
    let min = i

    for (let j = i + 1; j < this.length; j++) {
      if (this[j] < this[min]) min = j
    }

    if (min !== i) {
      const temp = this[i]
      this[i] = this[min]
      this[min] = temp
    }
  }

  return this
}
