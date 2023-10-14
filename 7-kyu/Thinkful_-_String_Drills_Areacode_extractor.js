/**
 * Thinkful - String Drills: Areacode extractor
 * https://www.codewars.com/kata/585a36b445376cbc22000072/train/javascript
 *
 */

const areaCode = text => text.match(/\d{3}(?=\))/)[0]
