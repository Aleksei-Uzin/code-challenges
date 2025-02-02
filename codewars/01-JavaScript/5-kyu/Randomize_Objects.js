/**
 * Randomize Objects
 * https://www.codewars.com/kata/5303229f1f5c12ef39000061/train/javascript
 *
 */

Object.prototype.random = function () {
  return getRandomValue(this)

  function getRandomValue(obj) {
    const keys = Object.keys(obj)
    const maxInd = keys.length

    if (maxInd === 0) return

    const randomKey = keys[~~(Math.random() * maxInd)]

    if (
      typeof obj[randomKey] === 'number' ||
      typeof obj[randomKey] === 'string'
    )
      return obj[randomKey]

    return getRandomValue(obj[randomKey])
  }
}

Object.prototype.toRandomArray = function () {
  const props = getArrOfProps(this)
  const maxInd = props.length

  return props
    .reduce((acc, val) => {
      const ind = ~~(Math.random() * maxInd * 10)
      if (!acc[ind]) acc[ind] = val
      else acc[ind + 1] = val
      return acc
    }, [])
    .filter(val => val !== undefined)

  function getArrOfProps(obj, res = []) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'number' || typeof obj[key] === 'string')
          res.push(obj[key])
        else getArrOfProps(obj[key], res)
      }
    }

    return res
  }
}
