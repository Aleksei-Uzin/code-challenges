/**
 * Learning TypeScript. Classes & Interfaces. Getters
 * https://www.codewars.com/kata/599d636e607719edf600010a
 *
 */

export class Cuboid {
  length: number
  width: number
  height: number

  constructor(length: number, width: number, height: number) {
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

export class Cube extends Cuboid {
  constructor(length: number) {
    super(length, length, length)
  }
}
