/**
 * Learning TypeScript. Classes & Interfaces. Setters
 * https://www.codewars.com/kata/590b85b745eaa415e10000b1/train/typescript
 *
 */

declare var ICuboid: {
  new (length: number): ICuboid
}

interface ICuboid {
  /** Length of the cube */
  length: number
  /** Surface area of the cube */
  surfaceArea: number
  /** Volume of the cube */
  volume: number
}

export class Cube implements ICuboid {
  length: number

  constructor(length: number) {
    this.length = length
  }

  get surfaceArea() {
    return 6 * this.length ** 2
  }

  set surfaceArea(newArea: number) {
    this.length = Math.sqrt(newArea / 6)
  }

  get volume() {
    return this.length ** 3
  }

  set volume(newVolume: number) {
    this.length = Math.cbrt(newVolume)
  }
}
