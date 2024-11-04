/**
 * Interactive Dictionary
 * https://www.codewars.com/kata/57a93f93bb9944516d0000c1/train/javascript
 *
 */

class Dictionary {
  constructor() {
    this.set = {}
  }

  newEntry(key, value) {
    this.set[key] = value
  }

  look(key) {
    return this.set[key] ?? `Can't find entry for ${key}`
  }
}
