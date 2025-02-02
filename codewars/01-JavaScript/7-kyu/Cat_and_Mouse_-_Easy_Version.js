/**
 * Cat and Mouse - Easy Version
 * https://www.codewars.com/kata/57ee24e17b45eff6d6000164/train/javascript
 *
 */

const catMouse = x =>
  Math.abs(x.indexOf('C') - x.indexOf('m')) <= 4 ? 'Caught!' : 'Escaped!'
