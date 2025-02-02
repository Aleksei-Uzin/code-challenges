/**
 * Find the unique string
 * https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript
 *
 */

const findUniq = arr => {
  const [first, ...rest] = arr.map(val =>
    [...new Set([...val.toLowerCase()])].sort().join('')
  )
  const isUniq = !rest.some(val => val.includes(first))

  if (isUniq) return arr[0]

  for (let i = 0; i < rest.length; i++) {
    if (!first.includes(rest[i])) return arr[i + 1]
  }
}
