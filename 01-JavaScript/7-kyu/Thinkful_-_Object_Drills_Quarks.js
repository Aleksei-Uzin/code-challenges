/**
 * Thinkful - Object Drills: Quarks
 * https://www.codewars.com/kata/5882b052bdeafec15e0000e6/train/javascript
 *
 */

class Quark{
  constructor(color, flavor) {
    this.baryon_number = 1 / 3
    this.color = color
    this.flavor = flavor
  }
  
  interact(quark) {
    const color = this.color

    this.color = quark.color
    quark.color = color
  }
}
