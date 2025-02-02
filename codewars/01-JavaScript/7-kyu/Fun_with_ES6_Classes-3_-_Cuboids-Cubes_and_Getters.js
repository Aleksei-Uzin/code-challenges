/**
 * Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
 * https://www.codewars.com/kata/56fbdda707cff41b68000de2/train/javascript
 *
 */

class Cuboid {
  constructor(length, width, height) {
    this.length = length
    this.width = width
    this.height = height
  }

  get surfaceArea() {
    const lw = this.length * this.width
    const wh = this.width * this.height
    const lh = this.length * this.height

    return 2 * (lw + wh + lh)
  }

  get volume() {
    return this.length * this.height * this.width
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length)
  }
}
