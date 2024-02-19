/**
 * Trimming a string
 * https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript
 *
 */

const trim = (str, size) => {
  const isTrim = str.length > size
  const newSize = size > 3 ? size - 3 : size

  return isTrim ? `${str.slice(0, newSize)}...` : str
}
