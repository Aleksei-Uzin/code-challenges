/**
 * Number Format
 * https://www.codewars.com/kata/565c4e1303a0a006d7000127/train/javascript
 *
 */

const numberFormat = number => String(number).replace(/\d(?=(\d{3})+$)/g, '$&,')
