/**
 * Learning TypeScript. Classes & Interfaces. Singletons
 * https://www.codewars.com/kata/591445324670baed3200008d/train/typescript
 *
 */

export class SingletonCounter {
  static #count = 0

  static getInstance() {
    return this
  }

  static inc() {
    return ++SingletonCounter.#count
  }
}
