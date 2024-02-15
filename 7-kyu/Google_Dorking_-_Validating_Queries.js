/**
 * Google Dorking - Validating Queries
 * https://www.codewars.com/kata/62cb487e43b37a5829ab5752/train/javascript
 *
 */

// FILTERS - is preloaded array
const FILTERS = [
  'intext',
  'inurl',
  'intitle',
  'allintext',
  'allinurl',
  'allintitle',
  'site',
  'before',
  'after',
  'filetype',
]

const isValid = query => {
  const queries = query.match(/[a-z]+(?=:)/g)

  for (let filter of queries) {
    if (!FILTERS.includes(filter)) return false
  }

  return true
}
