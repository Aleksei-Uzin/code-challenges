/**
 * Filter Long Words
 * https://www.codewars.com/kata/5697fb83f41965761f000052/train/javascript
 *
 */

const filterLongWords = (sentence, n) =>
  sentence.split(' ').filter(word => word.length > n)
