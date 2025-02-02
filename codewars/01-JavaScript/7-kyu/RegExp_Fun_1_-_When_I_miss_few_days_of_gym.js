/**
 * RegExp Fun #1 - When I miss few days of gym
 * https://www.codewars.com/kata/5720a81309e1f9b232001c5b/train/javascript
 *
 */

const gymSlang = phrase => {
  const map = new Map([
    ['combination', 'combo'],
    ['do not', "don't"],
    ['going to', 'gonna'],
    ['instagram', 'insta'],
    ['i am', "i'm"],
    ['probably', 'prolly'],
  ])
  const reg = /probably|instagram|combination|going to|do not|i am/gi

  return phrase.replace(reg, match => {
    const slang = map.get(match.toLowerCase())

    return /[A-Z]/.test(match)
      ? slang.replace(/^[a-z]/, m => m.toUpperCase())
      : slang
  })
}
