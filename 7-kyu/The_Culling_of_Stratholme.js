/**
 * The Culling of Stratholme
 * https://www.codewars.com/kata/634913db7611b9003dff49ad/train/javascript
 *
 */

const purifyTheStratholme = s =>
  s.replace(/\w?i+\w?/gi, '').replace(/^\s+|\s+(?=\s)|\s+$/g, '')
