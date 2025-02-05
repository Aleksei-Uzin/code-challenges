/**
 * up AND down
 * https://www.codewars.com/kata/56cac350145912e68b0006f0/train/javascript
 *
 */

const arrange = str => {
  const words = str.split(' ')

  for (let i = 1; i < words.length; i++) {
    if (
      (i % 2 == 0 && words[i].length > words[i - 1].length) ||
      (i % 2 != 0 && words[i].length < words[i - 1].length)
    ) {
      const tmp = words[i]
      words[i] = words[i - 1]
      words[i - 1] = tmp
    }
  }

  return words
    .map((w, i) => (i % 2 ? w.toUpperCase() : w.toLowerCase()))
    .join(' ')
}
