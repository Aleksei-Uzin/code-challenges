/**
 * Zebulan's Nightmare
 * https://www.codewars.com/kata/570fd7ad34e6130455001835/train/javascript
 *
 */

const zebulansNightmare = functionName =>
  functionName.replace(/_(\w)/g, (_, m) => m.toUpperCase())
