/**
 * Image Files Only
 * https://www.codewars.com/kata/56562b12044fa538b0000010/train/javascript
 *
 */

const imageFilter = arr =>
  arr.map(val => val.match(/(\w+)\.(jpg|gif|png|tiff|svg|bmp)$/i))
