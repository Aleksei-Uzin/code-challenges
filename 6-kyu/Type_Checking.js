/**
 * Type Checking
 * https://www.codewars.com/kata/54149054c1f3a6675b0009c2/train/javascript
 *
 */

const type = val => {
  if (val instanceof RegExp) return 'RegExp'
  if (val instanceof Array) return 'Array'
  if (val instanceof Object) return Object.getPrototypeOf(val).constructor.name

  switch (typeof val) {
    case 'undefined':
      return 'Undefined'
    case 'boolean':
      return 'Boolean'
    case 'function':
      return 'Function'
    case 'number': {
      if (Number.isNaN(val)) return 'Number NaN'
      else if (Math.abs(val) === Infinity) return 'Number Infinite'
      else if (Number.isInteger(val)) return 'Number Integer'
      else return 'Number Float'
    }
    case 'string': {
      if (/^\d+\.?\d+$/.test(val) || /^(0x)?[0-9A-F]+(xF)?$/.test(val))
        return 'String Numeric'
      else return 'String'
    }
    default:
      return 'Null'
  }
}
