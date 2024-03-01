/**
 * Thinkful - List and Loop Drills: Inverse Slicer
 * https://www.codewars.com/kata/586ec0b8d098206cce001141/train/javascript
 *
 */

const inverseSlice = (items, a, b) => items.filter((_, i) => i < a || i >= b)
