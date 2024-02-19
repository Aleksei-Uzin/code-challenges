/**
 * Thinkful - Object Drills: Vectors
 * https://www.codewars.com/kata/587f1e1f39d444cee6000ad4/train/javascript
 *
 */

class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  add({ x: x1, y: y1 }) {
    const x = this.x + x1
    const y = this.y + y1

    return new Vector(x, y)
  }
}
