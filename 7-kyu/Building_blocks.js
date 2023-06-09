/**
 * Building blocks
 * https://www.codewars.com/kata/55b75fcf67e558d3750000a3/train/javascript
 *
 */

class Block {  
  constructor(data) {
    const [w, l, h] = data

    this.width = w
    this.length = l
    this.height = h
  }
  
  getWidth() { return this.width }

  getHeight() { return this.height }

  getLength() { return this.length }

  getVolume() { return this.width * this.height * this.length }

  getSurfaceArea() { return 2 * (
    this.width * this.height
    + this.length * this.width
    + this.length * this.height
  )}
}
