/**
 * Null-Conditional Operator (C# 6.0)
 * https://www.codewars.com/kata/55bf6b640e7ec0138e000071/train/javascript
 *
 */

Car.prototype.getNumberOfGears = function getNumberOfGears() {
  return this?.engine?.gearbox?.numberOfGears ?? null
}
