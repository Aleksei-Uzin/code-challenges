/**
 * Find the Capitals
 * https://www.codewars.com/kata/53573877d5493b4d6e00050c/train/javascript
 *
 */

const capital = capitals =>
  capitals.map(
    ({ capital, country, state }) =>
      `The capital of ${state || country} is ${capital}`
  )
