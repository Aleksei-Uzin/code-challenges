/**
 * V A P O R C O D E
 * https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript
 *
 */

const vaporcode = str =>
  str
    .toUpperCase()
    .split('')
    .filter(val => /\S/.test(val))
    .join('  ')
