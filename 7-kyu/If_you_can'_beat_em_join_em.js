/**
 * If you can't beat 'em, join 'em!
 * https://www.codewars.com/kata/5d37899a3b34c6002df273ee/train/javascript
 *
 */

const sum = arr => arr.reduce((acc, n) => acc + n, 0)
const cantBeatSoJoin = numbers => numbers.sort((a, b) => sum(b) - sum(a)).flat()
