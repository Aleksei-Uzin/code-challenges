/**
 * Alternate capitalization
 * https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
 *
 */

const capitalize = (s) => {
  const str1 = "", str2 = ""

  s.split("").forEach((val, i) => {
    if (i % 2 === 0) {
      str1 += val.toUpperCase()
      str2 += val
    } else {
      str2 += val.toUpperCase()
      str1 += val
    }
  })

  return [str1, str2]
}
