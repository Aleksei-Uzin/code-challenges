/**
 * Check three and two
 * https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript
 *
 */

const checkThreeAndTwo = array => {  
  const res = array.reduce((acc, val) => {
    acc[val.charCodeAt(0) % 97] += 1
    return acc
  }, [0, 0, 0])

  return res.includes(2) && res.includes(3)
}
