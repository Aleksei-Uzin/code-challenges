/**
 * Backspaces in string
 * https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript
 *
 */

function cleanString(s) {
  while (s.includes('#')) {
    s = s.replace(/[^#]#|^#*/g, '')
  }

  return s
}
