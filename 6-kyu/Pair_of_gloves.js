/**
 * Pair of gloves
 * https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript
 *
 */

const numberOfPairs = gloves => {
  const uniq = [...new Set(gloves)]
  let result = 0

  for(let i = 0; i < uniq.length; i++) {
    const count = gloves.filter(x => x === uniq[i]).length

    result += Math.floor(count / 2)
  }

  return result
}
