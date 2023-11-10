/**
 * Credit Card Mask
 * https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
 *
 */

const maskify = str => str.replace(/.(?=.{4})/g, '#')
