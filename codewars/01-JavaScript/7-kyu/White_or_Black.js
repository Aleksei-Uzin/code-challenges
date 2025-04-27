/**
 * White or Black?
 * https://www.codewars.com/kata/563319974612f4fa3f0000e0/train/javascript
 *
 */

const mineColor = (file, rank) => {
  const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  const startCell = (abc.indexOf(file) + 1) % 2

  if (startCell) {
    return rank % 2 ? 'black' : 'white'
  } else {
    return rank % 2 ? 'white' : 'black'
  }
}
