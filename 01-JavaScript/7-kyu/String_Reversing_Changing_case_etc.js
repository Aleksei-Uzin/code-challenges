/**
 * String Reversing, Changing case, etc.
 * https://www.codewars.com/kata/58305403aeb69a460b00019a/train/javascript
 *
 */

const reverseAndMirror = (s1, s2) => {
  const res1 = reverseStr(reverseCase(s2))
  const res2 = `${reverseStr(reverseCase(s1))}${reverseCase(s1)}`
  return `${res1}@@@${res2}`
}
const reverseStr = str => [...str].reverse().join('')
const reverseCase = str =>
  [...str].reduce((acc, str) => {
    return (acc += /[a-z]/.test(str) ? str.toUpperCase() : str.toLowerCase())
  }, '')
