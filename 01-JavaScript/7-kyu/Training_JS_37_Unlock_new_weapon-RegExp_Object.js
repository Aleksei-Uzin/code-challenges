/**
 * Training JS #37: Unlock new weapon---RegExp Object
 * https://www.codewars.com/kata/5735e39313c205fe39001173/train/javascript
 *
 */

const countAnimals = (animals, count) =>
  count.map(val => (animals.match(new RegExp(val, 'g')) || []).length)
