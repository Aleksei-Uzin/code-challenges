/**
 * Heads and Legs
 * https://www.codewars.com/kata/574c5075d27783851800169e/train/javascript
 *
 */

function animals(heads, legs) {
  const isLegsEven = !(legs % 2)
  let cows = 0
  let chickens = 0

  if(isLegsEven) {
    cows = legs / 2 - heads
    chickens = heads - cows
  } else {
    return 'No solutions'
  }

  return (
    cows >= 0 && chickens >= 0
    ? [chickens, cows]
    : 'No solutions'
  )
}
