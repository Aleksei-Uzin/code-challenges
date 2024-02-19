/**
 * Color Ghost
 * https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript
 *
 */

// A
class GhostA {
  get color() {
    return getColor()
  }
}

// B
const GhostB = function() {
  return {
    get color() {
      return getColor()
    }
  }
}

function getColor() {
  const random = Math.round(Math.random() * 3)

  switch(random) {
    case 1:
      return 'white'
    case 2:
      return 'yellow'
    case 3:
      return 'purple'
    default:
      return 'red'
  }
}
