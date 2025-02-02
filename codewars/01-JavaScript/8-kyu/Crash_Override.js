/**
 * Crash Override
 * https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript
 *
 */

const aliasGen = (first, last) => {
  const regexp = new RegExp(/[^A-Z]/)
  const keyA = first.slice(0, 1).toUpperCase()
  const keyB = last.slice(0, 1).toUpperCase()

  if(regexp.test(keyA) || regexp.test(keyB)) {
    return 'Your name must start with a letter from A - Z.'
  }
  
  return firstName[keyA] + ' ' + surname[keyB]
}
