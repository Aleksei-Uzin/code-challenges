/**
 * FIRE and FURY
 * https://www.codewars.com/kata/59922ce23bfe2c10d7000057/train/javascript
 *
 */

const fireAndFury = tweet => {
  const arr = tweet.match(/FIRE|FURY/g)

  if (!arr || /[^EFIRUY]/.test(tweet)) return 'Fake tweet.'

  const res = arr.join('').replace(/(FIRE)+|(FURY)+/g, match => {
    const count = match.length / 4

    if (match.includes('FIRE')) {
      const mult = count > 1 ? 'and you '.repeat(count - 1) : ''
      return `You ${mult}are fired! `
    } else {
      const mult = count > 1 ? 'really '.repeat(count - 1) : ''
      return `I am ${mult}furious. `
    }
  })

  return res.trim()
}
