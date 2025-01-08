/**
 * Execute me nTimes
 * https://www.codewars.com/kata/5b2b4836b6989d207700005b/train/javascript
 *
 */

const execute = async (action, nTimes) =>
  await Promise.all(Array.from({ length: nTimes }, action))
