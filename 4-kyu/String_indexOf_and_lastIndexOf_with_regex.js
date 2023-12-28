/**
 * String indexOf (and lastIndexOf) with regex
 * https://www.codewars.com/kata/52fa7b5704bc8f7c85000d32/train/javascript
 *
 */

String.prototype.indexOf = function (arg, indFrom = 0) {
  const reg = new RegExp(arg)

  if (!reg.test(this)) return -1

  const str = this.slice(indFrom)
  let ind = null

  str.replace(reg, (m, i) => {
    ind = i + indFrom
    return m
  })

  return typeof ind === 'number' ? ind : -1
}

String.prototype.lastIndexOf = function (arg, indFrom) {
  return getLastInd(this, arg)

  function getLastInd(str, reg, ind = 0, lastInd = 0) {
    const newInd = str.indexOf(reg, ind)

    if ((newInd === -1 && ind === 0) || (newInd > indFrom && ind === 0)) {
      return -1
    } else if (newInd > indFrom || lastInd > newInd) {
      return lastInd
    } else {
      return getLastInd(str, reg, newInd + 1, newInd)
    }
  }
}
