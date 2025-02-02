/**
 * Breaking search bad
 * https://www.codewars.com/kata/52cd53948d673a6e66000576/train/javascript
 *
 */

// TITLES is a preloaded array of String to search throught
const TITLES = [
  'The Big Bang Theory',
  'How I Met Your Mother',
  'Dexter',
  'Breaking Bad',
  'Doctor Who',
  'The Hobbit',
  'Pacific Rim',
  'Pulp Fiction',
  'The Avengers',
  'Shining'
]

const search = searchTerm => {
  const search = new RegExp(searchTerm, 'i')
  
  return TITLES.filter(title => search.test(title))
}
