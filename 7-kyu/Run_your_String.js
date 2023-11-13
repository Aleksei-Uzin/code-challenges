/**
 * Run your String
 * https://www.codewars.com/kata/54cb61619b30e88e44001048/train/javascript
 *
 */

const runYourString = (arg, { param, func }) =>
  eval(`${param} => { ${func} }`)(arg)
