/**
 * Create sequence containing all allowed characters
 * https://www.codewars.com/kata/56523ec6fc8ac62677000005/train/javascript
 *
 */

const createSequence = regex => {
  const abcLowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const abcUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const nums = '0123456789'
  const isCaseSens = regex.ignoreCase
  const res = regex.source

  return res
    .replace(/(\w)\-(\w)/g, (m, n1, n2) => {
      if (/[a-z]/.test(m)) return getSeq(n1, n2, abcLowerCase, isCaseSens)
      else if (/[A-Z]/.test(m)) return getSeq(n1, n2, abcUpperCase, isCaseSens)
      else return getSeq(n1, n2, nums)
    })
    .replace(/([a-z]+)([A-Z]+)/, '$2$1')
    .replace(/\[|\]|\|/g, '')
}

const getSeq = (a, b, seq, sens) => {
  const set = seq.slice(seq.indexOf(a), seq.indexOf(b) + 1)
  return sens ? `${set.toUpperCase()}${set.toLowerCase()}` : set
}

// Best practice:
//
// const createSequence = (regex) => {
//   let seq = ''
//   for (let i = 0; i < 256; i++) {
//     if (regex.test(String.fromCharCode(i))) {
//       seq += String.fromCharCode(i)
//     }
//   }

//   return seq;
// }
