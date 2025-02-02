/**
 * Sort the Vowels!
 * https://www.codewars.com/kata/59e49b2afc3c494d5d00002a/train/javascript
 *
 */

const sortVowels = s => {
  if (typeof s !== 'string') return ''

  const res = []

  for (let c of s) {
    if (/[aeiou]/i.test(c)) res.push(`|${c}`)
    else res.push(`${c}|`)
  }

  return res.join('\n')
}
