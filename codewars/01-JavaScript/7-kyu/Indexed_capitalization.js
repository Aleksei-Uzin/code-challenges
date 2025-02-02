/**
 * Indexed capitalization
 * https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript
 *
 */

const capitalize = (s, arr) => {
  arr.forEach(i => {
    if(s[i]) s = s.slice(0, i) + s.slice(i, i + 1).toUpperCase() + s.slice(i + 1)
  })
  
  return s
}
