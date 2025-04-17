/**
 * Last Survivors Ep.2
 * https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651/train/javascript
 *
 */

const lastSurvivors = str => {
  const [char] = str.match(/(\w)(?=.*\1)/) || []

  if (!char) return str

  const nextChar =
    char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt() + 1)

  str = str.replace(char, nextChar)
  str = str.replace(char, '')

  return lastSurvivors(str)
}
