/**
 * Only one
 * https://www.codewars.com/kata/5734c38da41454b7f700106e/train/javascript
 *
 */

const onlyOne = (...args) => {
  const firstInd = args.indexOf(true)
  return firstInd >= 0 && firstInd === args.lastIndexOf(true)
}
