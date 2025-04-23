/**
 * Binding within the List Monad
 * https://www.codewars.com/kata/546e416c8e3b6bf82f0002f2/train/javascript
 *
 */

bind = function (list, func) {
  const res = []

  for (let val of list) {
    const newList = func(val)

    if (!Array.isArray(newList)) {
      throw new Error('ERROR! The returned value is not a list!')
    }

    for (let newVal of newList) {
      res.push(newVal)
    }
  }

  return res
}
