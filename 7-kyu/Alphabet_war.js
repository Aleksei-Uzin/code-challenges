/**
 * Alphabet war
 * https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript
 *
 */

const alphabetWar = fight => {
  const left = { w: 4, p: 3, b: 2, s: 1 }
  const right = { m: 4, q: 3, d: 2, z: 1 }
  const res = [0, 0]

  for(let i = 0; i < fight.length; i++) {
    let val = fight.charAt(i)
    if(left[val]) res[0] += left[val]
    if(right[val]) res[1] += right[val]
  }

  if(res[0] > res[1]) {
    return 'Left side wins!'
  } else if(res[0] < res[1]) {
    return 'Right side wins!'
  } else {
    return "Let's fight again!"
  }
}
