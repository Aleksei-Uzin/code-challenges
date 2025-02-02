/**
 * Playing with types
 * https://www.codewars.com/kata/543e308b23ccbda148001526/train/javascript
 *
 */

const typing = param => {
  if (param === undefined) return 'undefined'

  const type = typeof param

  return type === 'function'
    ? `${type}=${param.toString()}`
    : `${type}=${JSON.stringify(param)}`
}
