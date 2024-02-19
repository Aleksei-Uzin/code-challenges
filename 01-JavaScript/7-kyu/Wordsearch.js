/**
 * Wordsearch
 * https://www.codewars.com/kata/5545f847bd94d050be00011d/train/javascript
 *
 */

const wordSearch = (word, text) => new RegExp('\\b' + word + '\\b').test(text)
