/**
 * Decipher this!
 * https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript
 *
 */

const decipherThis = str => {
  const words = str.split(' ')
  let res = []

  words.forEach(cipher => {
    const code = cipher.match(/^\d+/)
    const word = cipher.replace(code, String.fromCharCode(code))

    if (word.length > 2) {
      const arr = word.split('')
      arr[1] = word.slice(-1)
      arr[arr.length - 1] = word.slice(1, 2)
      res.push(arr.join(''))
    } else {
      res.push(word)
    }
  })

  return res.join(' ')
}

// Best Practice
//
// function decipherThis(str) {
//   return str.split(" ")
//     .map(w =>
//       w.replace(/^\d+/, c => String.fromCharCode(c))
//        .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
//     )
//     .join(" ")
// }
