/**
 * Name Array Capping
 * https://www.codewars.com/kata/5356ad2cbb858025d800111d/train/javascript
 *
 */

const capMe = names =>
  names.map(name =>
    name.toLowerCase().replace(/./, match => match.toUpperCase())
  )
