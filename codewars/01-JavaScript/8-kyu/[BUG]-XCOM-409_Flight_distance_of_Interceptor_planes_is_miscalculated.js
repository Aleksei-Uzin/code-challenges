/**
 * [BUG] XCOM-409: Flight distance of Interceptor planes is miscalculated
 * https://www.codewars.com/kata/67b7a527c9f842fd3b02adb8/train/javascript
 *
 */

// speed of aircrafts is given in *knots*
// travelTime is in *minutes*
// travel distance should be returned in *kilometers*
const travelDistance = (avgSpeed, travelTime) => {
  const KM_PER_KNOT = 1.852
  const travelHours = travelTime / 60
  const traveledKnots = avgSpeed * travelHours
  const traveledKms = traveledKnots * KM_PER_KNOT

  return traveledKms
}
