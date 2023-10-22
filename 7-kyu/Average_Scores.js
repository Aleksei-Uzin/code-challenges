/**
 * Average Scores
 * https://www.codewars.com/kata/57b68bc7b69bfc8209000307/train/javascript
 *
 */

const average = scores =>
  Math.round(scores.reduce((acc, val) => acc + val) / scores.length)
