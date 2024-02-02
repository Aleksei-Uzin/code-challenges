/**
 * Find how many times did a team from a given country win the Champions League?
 * https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9/train/javascript
 *
 */

const countWins = (winnerList, country) =>
  winnerList.filter(({ country: c }) => c === country).length
