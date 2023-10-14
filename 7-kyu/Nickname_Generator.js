/**
 * Nickname Generator
 * https://www.codewars.com/kata/593b1909e68ff627c9000186/train/javascript
 *
 */

const nicknameGenerator = name => {
  if (name.length < 4) return 'Error: Name too short'

  return /[aeiou]/.test(name[2]) ? name.slice(0, 4) : name.slice(0, 3)
}
