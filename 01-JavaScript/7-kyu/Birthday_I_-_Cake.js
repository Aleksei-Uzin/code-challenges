/**
 * Birthday I - Cake
 * https://www.codewars.com/kata/5805ed25c2799821cb000005/train/javascript
 *
 */

const cake = (x, y) => {
  let sum = 0

  for (let i = 0; i < y.length; i++) {
    const code = y[i].charCodeAt()

    if (i % 2 === 0) sum += code
    else sum += code % 96
  }

  return (sum * 100) / x > 70 ? 'Fire!' : 'That was close!'
}
