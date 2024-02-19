/**
 * Evil or Odious
 * https://www.codewars.com/kata/56fcfad9c7e1fa2472000034/train/javascript
 *
 */

const evil = n => {
  const amount = n.toString(2).split('').filter(x => x === '1').length
  
  return amount % 2 ? "It's Odious!" : "It's Evil!"
}
