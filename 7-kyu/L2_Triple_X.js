/**
 * L2: Triple X
 * https://www.codewars.com/kata/568dc69683322417eb00002c/train/javascript
 *
 */

const tripleX = str =>
  str.indexOf('x') !== -1 ? str.indexOf('x') === str.indexOf('xxx') : false
