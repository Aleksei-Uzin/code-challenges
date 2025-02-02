/**
 * Data Reverse
 * https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
 *
 */

const dataReverse = data => {
  const len = data.length

  for (let i = 0; i < len / 2; i += 8) {
    for (let j = 0; j < 8; j++) {
      const temp = data[i + j]
      data[i + j] = data[len - i - 8 + j]
      data[len - i - 8 + j] = temp
    }
  }

  return data
}
