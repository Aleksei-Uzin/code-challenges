/**
 * Word Finder
 * https://www.codewars.com/kata/525d8c20915a399b5600087b/train/javascript
 *
 */

function Dictionary(words) {
  this.words = words
}

Dictionary.prototype.getMatchingWords = function (pattern) {
  const regStr = pattern.replace(/\?/g, '\\w')

  return this.words.filter(val => new RegExp(`^${regStr}$`).test(val))
}
