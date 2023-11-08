/**
 * Prison Break
 * https://www.codewars.com/kata/6507e3170b7009117e0c7865/train/javascript
 *
 */

const freedPrisoners = ([first, ...rest]) => {
  return first ? makeFree(rest.map(v => !v)) : 0

  function makeFree(arr, c = 1) {
    if (arr.length === 0) return c

    const index = arr.indexOf(true)
    const newArr = index >= 0 ? arr.slice(index + 1).map(v => !v) : []
    const newC = index >= 0 ? c + 1 : c

    return makeFree(newArr, newC)
  }
}
