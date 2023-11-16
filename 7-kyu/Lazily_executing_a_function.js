/**
 * Lazily executing a function
 * https://www.codewars.com/kata/5458d4d2cbae2a9438000389/train/javascript
 *
 */

const makeLazy =
  (func, ...args) =>
  () =>
    func(...args)
