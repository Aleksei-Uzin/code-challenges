/**
 * No Loops 3 - Copy Within
 * https://www.codewars.com/kata/57cc5f9258da9e47bc000143/train/javascript
 *
 */

const copy = (array, start, stop, place) => {
  const subArr = array.slice(start, stop)
  array.splice(place, stop - start, ...subArr)
  return array
}
