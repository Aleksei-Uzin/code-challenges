/**
 * Double value every next call
 * https://www.codewars.com/kata/632408defa1507004aa4f2b5/train/javascript
 *
 */

class Class {
  static val = 1

  static getNumber() {
    const result = this.val

    this.val *= 2

    return result
  }
}
