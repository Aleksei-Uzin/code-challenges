/**
 * Survivors Ep.4
 * https://www.codewars.com/kata/60a516d70759d1000d532029/train/javascript
 *
 */

function canTraverse(momentum, powerups) {
  for (let i = 0; i < powerups.length; i++) {
    if (momentum < 1) return false

    momentum += powerups[i]
    momentum -= 1
  }

  return momentum >= 1
}

function survivors(listOfMomentum, listOfPowerups) {
  const res = []

  for (let i = 0; i < listOfMomentum.length; i++) {
    if (canTraverse(listOfMomentum[i], listOfPowerups[i])) {
      res.push(i)
    }
  }

  return res
}
