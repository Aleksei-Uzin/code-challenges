/**
 * Building a mini search engine
 * https://www.codewars.com/kata/575951d3961a030cb1000841/train/javascript
 *
 */

const searchEng = (string, searchWord, searchMethod, newWord) => {
  if (/[^a-z0-9]/gi.test(searchWord + newWord) || /[^12]/.test(searchMethod))
    return 'No valid input'

  const res = { matches: 0, newString: '' }
  const reg = new RegExp('\\b' + searchWord + '\\b', 'g')
  const words = string.match(reg)

  if (words) res.matches = words.length

  if (searchMethod === 2) {
    const str = string.replace(reg, newWord)
    res.newString = str
  }

  return res
}
