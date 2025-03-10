/**
 * Implementing the Array Object
 * https://www.codewars.com/kata/5398beaf53f51088a9000fa7/train/javascript
 *
 */

class List {
  constructor(...args) {
    this.length = args.length

    for (let i = 0; i < this.length; i++) {
      this[i] = args[i]
    }
  }

  push(...newArgs) {
    for (let i = 0; i < newArgs.length; i++) {
      this[this.length++] = newArgs[i]
    }

    return this.length
  }

  pop() {
    const poppedItem = this[--this.length]
    delete this[this.length]
    return poppedItem
  }

  shift() {
    const shiftedItem = this[0]
    this.length -= 1

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1]
    }

    delete this[this.length]

    return shiftedItem
  }

  unshift(...newArgs) {
    const newArgsLen = newArgs.length
    const tmpObj = {}

    for (let i = 0; i < this.length; i++) {
      tmpObj[i] = this[i]
    }

    for (let j = 0; j < this.length; j++) {
      if (j < newArgsLen) {
        this[j] = newArgs[j]
        this.length += 1
      } else {
        this[j] = tmpObj[j - newArgsLen]
      }
    }

    return this.length
  }

  filter(predicate) {
    const filteredList = new List()

    for (let i = 0; i < this.length; i++) {
      const item = this[i]

      if (predicate(item)) filteredList.push(item)
    }

    return filteredList
  }
}
