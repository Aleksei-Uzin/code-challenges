/**
 * Paul Cipher & Kevin Arnold
 * https://www.codewars.com/kata/57c4ed873189a5bea00007e6/train/javascript
 *
 */

const encode = input => {
  if (!input) return ''
  let res = ''

  for (let i = 0; i < input.length; i++) {
    if (/[a-z]/i.test(input[i])) {
      const currCode = input[i].toUpperCase().charCodeAt()
      const prevCode = getPrevCode(input, i)
      const nextCode = currCode + prevCode
      res += String.fromCharCode(
        nextCode > 90 ? 64 + (nextCode - 90) : nextCode
      )
    } else {
      res += input[i]
    }
  }

  return res
}

const decode = input => {
  if (!input) return ''
  let res = ''

  for (let i = 0; i < input.length; i++) {
    if (/[a-z]/i.test(input[i])) {
      const currCode = input[i].toUpperCase().charCodeAt()
      const prevCode = getPrevCode(res, i)
      const nextCode = currCode - prevCode
      res += String.fromCharCode(
        nextCode < 65 ? 90 - (64 - nextCode) : nextCode
      )
    } else {
      res += input[i]
    }
  }

  return res
}

function getPrevCode(str, i) {
  for (let j = i - 1; j >= 0; j--) {
    if (/[a-z]/i.test(str[j])) {
      return str[j].toUpperCase().charCodeAt() % 64
    }
  }

  return 0
}
