/**
 * Can this object fly? Balloons in "Up" and in real life
 * https://www.codewars.com/kata/59ea2a532a7accf2510000ce/train/javascript
 *
 */

class Journey {
  #liftWeight
  #crewWeight
  #objWeight

  constructor(obj, crew, balloons) {
    this.#objWeight = obj.weight * 1e3
    this.#crewWeight = crew * 8e4
    this.#liftWeight = balloons * 4.8
  }

  isPossible() {
    return this.#crewWeight + this.#objWeight < this.#liftWeight
  }
}
