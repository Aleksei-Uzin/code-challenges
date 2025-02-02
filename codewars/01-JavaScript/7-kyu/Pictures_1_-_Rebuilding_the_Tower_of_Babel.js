/**
 * Pictures #1 - Rebuilding the Tower of Babel
 * https://www.codewars.com/kata/5722cc50785220ac8b00129b/train/javascript
 *
 */

const babel = height => {
  const floor = ['o', 'o', 'o']
  const res = []
  let n = 1

  for (let i = 0; i < height; i++) {
    res.push(
      floor.map(val => ' '.repeat(height - i - 1) + val.repeat(n)).join('\n')
    )
    n += 2
  }

  return res.join('\n')
}
