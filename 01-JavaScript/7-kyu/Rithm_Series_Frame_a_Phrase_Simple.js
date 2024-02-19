/**
 * Rithm Series: Frame a Phrase Simple
 * https://www.codewars.com/kata/5867d76b36959fa4a400034e/train/javascript
 *
 */

const frame = (phrase, ch = '*') => {
  const len = phrase.length
  const line = ch.repeat(len + 4)
  const indent = `${ch}${' '.repeat(len + 2)}${ch}`
  const middle = `${ch} ${phrase} ${ch}`
  const res = phrase
    ? [line, indent, middle, indent, line]
    : [line, indent, indent, line]

  return res.join('\n')
}
