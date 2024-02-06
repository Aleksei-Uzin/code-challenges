/**
 * SantaClausable Interface
 * https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript
 *
 */

const isSantaClausable = obj =>
  typeof obj.sayHoHoHo === 'function' &&
  typeof obj.distributeGifts === 'function' &&
  typeof obj.goDownTheChimney === 'function'
