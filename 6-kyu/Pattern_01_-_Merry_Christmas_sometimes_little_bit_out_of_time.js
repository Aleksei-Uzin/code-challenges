/**
 * Pattern 01: Merry Christmas (sometimes little bit out of time;-))
 * https://www.codewars.com/kata/56c30eaef85696bf35000ccf/train/javascript
 *
 */

const christmasTree = height => {
  const floors = ~~(height / 3) * 2
  let trunkSpace = ''
  const res = []

  for (let i = 1; i <= floors; i += 2) {
    for (let j = i; j <= i + 4; j += 2) {
      const tree = '*'.repeat(j)
      const space = ' '.repeat((floors + 3 - j) / 2)

      if (j === 3) trunkSpace = space

      res.push(space + tree)
    }
  }

  res.push(trunkSpace + '###')

  return height < 3 ? '' : res.join('\r\n')
}
