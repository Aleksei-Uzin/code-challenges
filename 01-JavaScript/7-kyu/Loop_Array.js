/**
 * Loop Array
 * https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/train/javascript
 *
 */

const loopArr = (arr, direction, steps) => {
  const shift = arr.length - steps

  return direction == 'left'
    ? [...arr.slice(steps), ...arr.slice(0, steps)]
    : [...arr.slice(shift), ...arr.slice(0, shift)]
}
