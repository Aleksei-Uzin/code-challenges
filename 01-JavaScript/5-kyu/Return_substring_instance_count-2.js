/**
 * Return substring instance count - 2
 * https://www.codewars.com/kata/52190daefe9c702a460003dd/train/javascript
 *
 */

function searchSubstr(fullText, searchText, allowOverlap = true) {
  if (!fullText || !searchText) return 0

  if (!allowOverlap) {
    return (fullText.match(new RegExp(searchText, 'g')) || []).length
  }

  const [, start, end] = /(\w)(\w+)/.exec(searchText)
  let count = 0

  while (fullText.includes(searchText)) {
    fullText = fullText.replace(new RegExp(`${start}(?=${end})`), '')
    count += 1
  }

  return count
}
