/**
 * Convert Hash To An Array
 * https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript
 *
 */

const convertHashToArray = hash => {
  const keys = Object.keys(hash).sort()
  const res = []
  
  keys.forEach(key => {
    res.push([key, hash[key]])
  })

  return res
}
