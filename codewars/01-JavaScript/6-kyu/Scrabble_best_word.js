/**
 * Scrabble best word
 * https://www.codewars.com/kata/563f960e3c73813942000015/train/javascript
 *
 */

const getBestWord = (points, words) => {
  const wordsWithInd = words.map((word, i) => [word, i])
  const sortedWords = wordsWithInd.sort(([a], [b]) => a.length - b.length)
  let sum = 0
  let ind = 0

  for (let [word, i] of sortedWords) {
    const tmpSum = [...word].reduce(
      (acc, c) => acc + points[c.charCodeAt() % 65],
      0
    )
    if (tmpSum > sum) {
      sum = tmpSum
      ind = +i
    }
  }

  return ind
}
