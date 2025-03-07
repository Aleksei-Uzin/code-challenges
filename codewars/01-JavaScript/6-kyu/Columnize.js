/**
 * Columnize
 * https://www.codewars.com/kata/6087bb6050a6230049a068f1/train/javascript
 *
 */

const columnize = (items, n) => {
  const width = Array.from({ length: n }, _ => 0)
  const table = []
  let line = []

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    width[i % n] = Math.max(width[i % n], item.length)
    line.push(item)

    if (line.length % n === 0 || i === items.length - 1) {
      table.push(line)
      line = []
    }
  }

  return table
    .map(line => line.map((val, i) => val.padEnd(width[i], ' ')).join(' | '))
    .join('\n')
}
