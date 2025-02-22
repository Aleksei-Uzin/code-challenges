/**
 * Card game: twenty-one
 * https://www.codewars.com/kata/5a34c307f28b829b3d000045/train/javascript
 *
 */

const twentyOne = (...cards) => {
  const sum = cards.reduce((acc, card) => {
    const [val] = card.match(/^[ajkq\d]+/i)

    switch (val) {
      case 'A':
        return acc + 11
      case 'J':
        return acc + 2
      case 'K':
        return acc + 4
      case 'Q':
        return acc + 3
      default:
        return acc + parseInt(val)
    }
  }, 0)

  return sum < 21 ? 'less' : sum > 21 ? 'more' : 'twenty-one'
}
