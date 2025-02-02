/**
 * Guess the Word: Count Matching Letters
 * https://www.codewars.com/kata/5912ded3f9f87fd271000120/train/javascript
 *
 */

const countCorrectCharacters = (correctWord, guess) => {
  if (correctWord.length !== guess.length)
    throw new Error('Words must be the same length')

  let res = 0

  for (let i of Object.keys(correctWord)) {
    if (correctWord[i] === guess[i]) res++
  }

  return res
}
