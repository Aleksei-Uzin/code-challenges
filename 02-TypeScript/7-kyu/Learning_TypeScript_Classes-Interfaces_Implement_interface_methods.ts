/**
 * Learning TypeScript. Classes & Interfaces. Implement interface methods
 * https://www.codewars.com/kata/591305520c6f9f5c93000052/train/typescript
 *
 */

interface IGeometricFigure {
  area: () => number
  perimeter: () => number
}

export class Square implements IGeometricFigure {
  private _side: number

  constructor(side = 0) {
    this._side = side
  }

  area() {
    return this._side ** 2
  }

  perimeter() {
    return this._side * 4
  }
}

export class Circle implements IGeometricFigure {
  private _radius: number

  constructor(radius = 0) {
    this._radius = radius
  }

  area() {
    return Math.PI * this._radius ** 2
  }

  perimeter() {
    return 2 * Math.PI * this._radius
  }
}
