/**
 * Coding 3min : Find the murderer
 * https://www.codewars.com/kata/570f3fc5b29c702c5500043e/train/javascript
 *
 */

const sc = (said, suspects) => {
  const reg = new RegExp('^' + said.replace(/~/g, '.'), 'i')

  return suspects.filter(name => reg.test(name)).join(',')
}
