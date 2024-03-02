/**
 * Rock Off!
 * https://www.codewars.com/kata/5b097da6c3323ac067000036/train/javascript
 *
 */

const solve = (a, b) => {
  let sumA = 0
  let sumB = 0

  a.forEach((n, i) => {
    if (n > b[i]) sumA += 1
    if (n < b[i]) sumB += 1
  })

  if (sumA > sumB) return `${sumA}, ${sumB}: Alice made "Kurt" proud!`
  else if (sumA < sumB) return `${sumA}, ${sumB}: Bob made "Jeff" proud!`
  else return `${sumA}, ${sumB}: that looks like a "draw"! Rock on!`
}
