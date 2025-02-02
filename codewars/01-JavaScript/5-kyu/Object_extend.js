/**
 * Object extend
 * https://www.codewars.com/kata/51f9d3a6e5a42591ae0001eb/train/javascript
 *
 */

// isObject - preloaded function
const extend = (...rest) => {
  const objects = rest.filter(isObject)
  const res = {}

  objects.forEach(obj => {
    const keys = Object.keys(obj)

    keys.forEach(key => {
      if(!res.hasOwnProperty(key)) res[key] = obj[key]
    })
  })

  return res
}
