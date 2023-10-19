/**
 * The Union Jack
 * https://www.codewars.com/kata/5620281f0eeee479cd000020/train/javascript
 *
 */

const unionJack = x => {
  if (typeof x !== 'number') return false

  const size = x > 7 ? Math.ceil(x) : 7
  const isEven = size % 2 === 0
  const center = isEven
    ? `${'X'.repeat(size)}\n${'X'.repeat(size)}`
    : 'X'.repeat(size)
  let maxSpaces = isEven
    ? Math.ceil((size - 3) / 2) - 1
    : Math.floor((size - 3) / 2)
  const half = isEven ? Math.floor(size / 2) - 1 : Math.floor(size / 2)
  const lines = []

  for (let i = 0; i < half; i++) {
    const outside = '-'.repeat(i)
    const inside = '-'.repeat(maxSpaces)
    lines.push(`${outside}X${inside}${isEven ? 'XX' : 'X'}${inside}X${outside}`)
    maxSpaces--
  }

  return [...lines, center, ...lines.reverse()].join('\n')
}
