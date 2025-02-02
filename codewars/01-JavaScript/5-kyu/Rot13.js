/**
 * Rot13
 * https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
 *
 */

const rot13 = message => {
  let res = []

  for (let char of message) {
    const code = char.charCodeAt(0)

    if (/[a-z]/.test(char)) {
      const nextCode = (code + 13) % 122 || 122
      res.push(nextCode > 96 ? nextCode : nextCode + 96)
    } else if (/[A-Z]/.test(char)) {
      const nextCode = (code + 13) % 90 || 90
      res.push(nextCode > 64 ? nextCode : nextCode + 64)
    } else {
      res.push(code)
    }
  }

  return String.fromCharCode(...res)
}

// Best Practice
//
// function rot13(message) {
//   var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//   return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
// }
