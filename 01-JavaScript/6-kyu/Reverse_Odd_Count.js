/**
 * Reverse Odd Count
 * https://www.codewars.com/kata/58a4f7f43d97b56d27000022/train/javascript
 *
 */

const reverseOddCount = arr => {
  const calc = arr.reduce((acc, item) => {
    !acc[item] ? (acc[item] = 1) : (acc[item] += 1)
    return acc
  }, {})
  const odd = []
  const res = []

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    const seq = [item]

    while (item === arr[i + 1]) {
      seq.push(item)
      i++
    }

    if (calc[item] % 2 === 0) {
      res.push(...seq)
    } else {
      res.push(...seq.map(_ => null))
      odd.push(...seq)
    }
  }

  return res.map(val => val || odd.pop())
}
