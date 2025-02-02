/**
 * Return substring instance count
 * https://www.codewars.com/kata/5168b125faced29f66000005/train/javascript
 *
 */

const solution = (fullText, searchText) => {
  const match = fullText.match(new RegExp(searchText, 'g'))

  return match ? match.length : 0
}
