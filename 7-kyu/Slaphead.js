/**
 * Slaphead
 * https://www.codewars.com/kata/57efab9acba9daa4d1000b30/train/javascript
 *
 */

const bald = x => {
  const count = (x.match(/\//g) || []).length
  const cleanShaven = x.replace(/\//g, '-')
  let res = ''

  if (count === 0) res = 'Clean!'
  else if (count === 1) res = 'Unicorn!'
  else if (count === 2) res = 'Homer!'
  else if (count >= 3 && count <= 5) res = 'Careless!'
  else res = 'Hobo!'

  return [cleanShaven, res]
}
