/**
 * Double Sort
 * https://www.codewars.com/kata/57cc79ec484cf991c900018d/train/javascript
 *
 */

const dbSort = a =>
  a.sort((a, b) => {
    if (typeof a === 'string' && typeof b === 'string')
      return a.localeCompare(b)
    else if (typeof a === 'number' && typeof b === 'number') return a - b
    else if (typeof a === 'string' && typeof b === 'number') return 1
    else return -1
  })
