/**
 * Most frequently used words in a text
 * https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript
 *
 */

const topThreeWords = text => {
  if (/^[^a-z]+$/i.test(text)) return []

  const words = text.toLowerCase().split(/\s/)
  const list = words.reduce((acc, item) => {
    const word = item.replace(/[^a-z']+/, '')

    if (!word) return acc
    else return !acc[word] ? (acc[word] = 1) : (acc[word] += 1), acc
  }, {})

  return Object.entries(list)
    .sort((a, b) => b[1] - a[1])
    .map(val => val[0])
    .slice(0, 3)
}
