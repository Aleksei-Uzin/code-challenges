/**
 * Drone Fly-By
 * https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript
 *
 */

const flyBy = (lamps, drone) => {
  const pathLength = drone.length < lamps.length ? drone.length : lamps.length

  return 'o'.repeat(pathLength) + lamps.slice(pathLength)
}
