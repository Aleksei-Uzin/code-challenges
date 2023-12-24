/**
 * Batman Quotes
 * https://www.codewars.com/kata/551614eb77dd9ee37100003e/train/javascript
 *
 */

const getQuote = (quotes, hero) => {
  const index = hero.match(/\d+/)
  const name = hero.replace(/\d+/, '')

  if (/^B?a?t?m?a?n?$/.test(name)) return `Batman: ${quotes[index]}`
  else if (/^R?o?b?i?n?$/.test(name)) return `Robin: ${quotes[index]}`
  else return `Joker: ${quotes[index]}`
}
