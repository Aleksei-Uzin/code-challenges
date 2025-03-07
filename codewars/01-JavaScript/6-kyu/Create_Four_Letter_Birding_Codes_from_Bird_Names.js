/**
 * Create Four Letter Birding Codes from Bird Names
 * https://www.codewars.com/kata/5a580064e6be38fd34000147/train/javascript
 *
 */

const birdCode = arr =>
  arr.map(word => {
    const arr = word.match(/[a-z']+/gi) || []
    const [a, b, c, d] = arr
    let res = ''

    switch (arr.length) {
      case 1:
        res = a.slice(0, 4)
        break
      case 2:
        res = a.slice(0, 2).concat(b.slice(0, 2))
        break
      case 3:
        res = a[0].concat(b[0]).concat(c.slice(0, 2))
        break
      default:
        res = arr.map(w => w[0]).join('')
    }

    return res.toUpperCase()
  })
