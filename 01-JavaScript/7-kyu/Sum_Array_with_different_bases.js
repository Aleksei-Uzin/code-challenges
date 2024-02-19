/**
 * Sum Array with different bases
 * https://www.codewars.com/kata/5a005f4fba2a14897f000086/train/javascript
 *
 */

const sumItUp = numsWithBases =>
  numsWithBases.reduce(
    (acc, [num, base]) => acc + Number.parseInt(num, base),
    0
  )
