/**
 * Pirates!! Are the Cannons ready!??
 * https://www.codewars.com/kata/5748a883eb737cab000022a6/train/javascript
 *
 */

const cannonsReady = gunners =>
  Object.values(gunners).every(gunner => gunner === 'aye') ? 'Fire!' : 'Shiver me timbers!'
