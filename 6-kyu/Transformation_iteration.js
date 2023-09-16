/**
 * Transformation iteration
 * https://www.codewars.com/kata/5872d59caa042821100001f8/train/javascript
 *
 */

const transform = (source, target) => {
  const res = [source]
  let str = source
  
  for(let i = 0; i < source.length; i++) {
    const charA = source.charAt(i)
    const charB = target.charAt(i)

    if(charA !== charB) {
      const arr = str.split('')
      arr.splice(i, 1, charB)
      str = arr.join('')
      res.push(str)
    }
  }

  return res
}
