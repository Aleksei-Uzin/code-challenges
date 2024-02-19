/**
 * Count word occurrences
 * https://www.codewars.com/kata/54fdbad0762e2e8a54000452/train/javascript
 *
 */

const wordCounter = text => ({
  res: Object.create(null),
  count(word) {
    if (this.res[word]) return this.res[word]

    const isTextValid = /[a-z]+/i.test(text)
    const isWordValid = /[a-z]+/i.test(word)
    const reg = new RegExp('\\b' + word + '\\b', 'g')

    this.res[word] = isTextValid && isWordValid ? text.split(reg).length - 1 : 0

    return this.res[word]
  },
})
