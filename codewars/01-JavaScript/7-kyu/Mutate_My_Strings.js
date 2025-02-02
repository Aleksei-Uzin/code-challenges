/**
 * Mutate My Strings
 * https://www.codewars.com/kata/59bc0059bf10a498a6000025/train/javascript
 *
 */

const mutateMyStrings = (strOne, strTwo) => {
  const res = new Set()

  for (let i = 0; i <= strOne.length; i++) {
    res.add(`${strTwo.slice(0, i)}${strOne.slice(i)}\n`)
  }

  return [...res].join('')
}
