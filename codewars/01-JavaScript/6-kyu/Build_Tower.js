/**
 * Build Tower
 * https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
 *
 */

const towerBuilder = nFloors => {
  const tower = []
  const max = nFloors * 2 - 1

  for (let i = 1; i <= max; i += 2) {
    const space = ' '.repeat((max - i) / 2)
    const floor = `${space}${'*'.repeat(i)}${space}`
    tower.push(floor)
  }

  return tower
}
