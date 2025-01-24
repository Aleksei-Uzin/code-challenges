/**
 * Where Are My Glasses?
 * https://www.codewars.com/kata/6512c786a07f6a000fe7a274/train/javascript
 *
 */

const findGlasses = arr => arr.findIndex(val => /O\-+O/.test(val))
