/**
 * Naughty or Nice?
 * https://www.codewars.com/kata/52a6b34e43c2484ac10000cd/train/javascript
 *
 */

const getNiceNames = people =>
  people.reduce(
    (acc, { name, wasNice }) => (wasNice ? [...acc, name] : acc),
    []
  )

const getNaughtyNames = people =>
  people.reduce(
    (acc, { name, wasNice }) => (!wasNice ? [...acc, name] : acc),
    []
  )
