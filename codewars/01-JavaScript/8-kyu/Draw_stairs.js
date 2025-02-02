/**
 * Draw stairs
 * https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript
 *
 */

function drawStairs(n) {
  const c = 'I'
  const s = ' '
  const br = '\n'
  let res = ''
  
  for(let i = 0; i < n; i++) {
    if (i + 1 === n) {
      res += c
      break
    }

    res += c + br

    for(let j = 0; j <= i; j++) {
      res += s
    }
  }
  
  return res
}

console.log(drawStairs(5))
