/**
 * Compress sentences
 * https://www.codewars.com/kata/59de469cfc3c492da80000c5/train/javascript
 *
 */

const compress = sentence => {
  if (!sentence) return '0'

  const newSentence = sentence.toLowerCase()
  const set = [...new Set(newSentence.split(' '))]

  return newSentence.replace(/\s*\w+/g, m => set.indexOf(m.trim()))
}
