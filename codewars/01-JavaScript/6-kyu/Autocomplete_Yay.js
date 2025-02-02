/**
 * Autocomplete! Yay!
 * https://www.codewars.com/kata/5389864ec72ce03383000484/train/javascript
 *
 */

const autocomplete = (input, dictionary) => {
  const match = input.replace(/[^a-z]/gi, '')
  const reg = new RegExp(`^${match}`, 'i')
  const res = dictionary.filter(val => reg.test(val))

  return res.slice(0, 5)
}
