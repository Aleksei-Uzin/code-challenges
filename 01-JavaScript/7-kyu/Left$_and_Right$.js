/**
 * Left$ and Right$
 * https://www.codewars.com/kata/53f211b159c3fcec3d000efa/train/javascript
 *
 */

const left$ = (str, i = 1) => {
  const endInd = typeof i === 'string' ? str.indexOf(i) : i
  return str.slice(0, endInd)
}

const right$ = (str, i = 1) => {
  const startInd =
    typeof i === 'string' ? str.length - str.lastIndexOf(i) - i.length : i
  return i ? str.slice(-startInd) : ''
}
