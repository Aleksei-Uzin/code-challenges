/**
 * For Twins: 2. Math operations
 * https://www.codewars.com/kata/59c287b16bddd291c700009a/train/javascript
 *
 */

const  iceBrickVolume = (radius, bottleLength, rimLength) => {
  const height = bottleLength - rimLength

  return height * 2 * radius * radius
}
