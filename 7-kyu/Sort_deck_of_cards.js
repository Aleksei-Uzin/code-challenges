/**
 * Sort deck of cards
 * https://www.codewars.com/kata/56f399b59821793533000683/train/javascript
 *
 */

const sortCards = arr => {
  const cards = 'A23456789TJQK'

  return arr.sort((a, b) => cards.indexOf(a) - cards.indexOf(b))
}
