/**
 * Please help Bob
 * https://www.codewars.com/kata/5751fef5dcc1079ac5001cff/train/javascript
 *
 */

const errBob = str =>
  str.replace(/\w\b/g, match =>
    /[^aeiou]/i.test(match)
      ? match.toLowerCase() === match
        ? `${match}err`
        : `${match}ERR`
      : match
  )
