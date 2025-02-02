/**
 * Combine objects
 * https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript
 *
 */

const combine = (...args) => {
  const res = {}
  
  args.forEach(obj => {
    const keys = Object.keys(obj)
    
    keys.forEach(key => {
      if(!res[key]) {
        res[key] = obj[key]
      } else {
        res[key] += obj[key]
      }
    })
  })
  
  return res
}
