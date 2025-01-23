/**
 * Function Cache
 * https://www.codewars.com/kata/525481903700c1a1ff0000e1/train/javascript
 *
 */

function cache(func) {
  const cachedResults = new Map()

  return function innerFn(...args) {
    const stringifiedArgs = JSON.stringify(args)

    if (!cachedResults.has(stringifiedArgs)) {
      cachedResults.set(stringifiedArgs, func(...args))
    }

    return cachedResults.get(stringifiedArgs)
  }
}
