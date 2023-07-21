/**
 * Grasshopper - Terminal Game #1
 * https://www.codewars.com/kata/55e8aba23d399a59500000ce/train/javascript
 *
 */

class Hero {
  constructor(name = 'Hero', position = '00', health = 100, damage = 5, experience = 0) {
    Object.assign(this, { name, position, health, damage, experience })
  }
}