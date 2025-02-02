/**
 * Non-even substrings
 * https://www.codewars.com/kata/59da47fa27ee00a8b90000b4/train/javascript
 *
 */

const solve = s => {
  let res = 0

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      if (/[13579]$/.test(s.substring(i, j))) res++
    }
  }

  return res
}

// Best practice
//
// function solve(s) {
//   return [...s].reduce((t, n, i) => t + (+n % 2 ? i + 1 : 0), 0)
// }
