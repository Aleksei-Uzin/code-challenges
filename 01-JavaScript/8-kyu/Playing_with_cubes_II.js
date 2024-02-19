/**
 * Playing with cubes II
 * https://www.codewars.com/kata/55c0ac142326fdf18d0000af/train/javascript
 *
 */

class Cube {
  #getAbs = n => Math.abs(n)

  constructor(side = 0) {
    this.side = this.#getAbs(side)
  }
  
  getSide() {
    return this.side
  }

  setSide(n) {
    this.side = this.#getAbs(n)
  }
}
