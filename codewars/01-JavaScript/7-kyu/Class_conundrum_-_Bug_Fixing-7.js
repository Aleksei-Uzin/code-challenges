/**
 * Class conundrum - Bug Fixing #7
 * https://www.codewars.com/kata/55cd4ce59382498cbd000080/train/javascript
 *
 */

class List {
  constructor(type) {
    this.type = type
    this.items = []
    this.count = 0
  }
  add(item) {
    if (typeof item !== this.type) {
      return `This item is not of type: ${this.type}`
    }

    this.items.push(item)
    this.count += 1
    return this
  }
}
