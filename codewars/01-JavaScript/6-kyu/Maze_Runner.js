/**
 * Maze Runner
 * https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript
 *
 */

const mazeRunner = (maze, directions) => {
  const mazeStr = `1${maze.map(item => item.join('')).join('1')}1`
  const len = maze.length + 1
  let curr = mazeStr.indexOf('2')

  for (let step of directions) {
    if (step === 'N') curr -= len
    if (step === 'S') curr += len
    if (step === 'W') curr -= 1
    if (step === 'E') curr += 1

    if (mazeStr[curr] === '3') return 'Finish'
    if (!mazeStr[curr] || mazeStr[curr] === '1') return 'Dead'
  }

  return 'Lost'
}
