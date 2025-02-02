/**
 * Get the lost toString back
 * https://www.codewars.com/kata/561abc8d324728b06e000102/train/javascript
 *
 */

const _originalToString = func => Function.prototype.toString.call(func)
