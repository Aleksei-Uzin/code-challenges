/**
 * Haiku Wizard
 * https://www.codewars.com/kata/595f4df2e8f12961ab00007f/train/javascript
 *
 */

// words - is a preloaded array
const haikuWizard = arr => {
  const res = []

  for (let item of arr) {
    let line = []

    for (let val of item) {
      const [syll, i] = val.toString().match(/\d/g)
      line.push(words[+syll - 1][i])
    }

    res.push(line.join(' '))
  }

  return res.join('\n')
}
