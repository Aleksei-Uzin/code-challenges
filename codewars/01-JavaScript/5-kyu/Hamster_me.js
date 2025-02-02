/**
 * Hamster me
 * https://www.codewars.com/kata/595ddfe2fc339d8a7d000089/train/javascript
 *
 */

const hamsterMe = (code, message) => {
  const codeArr = [...new Set(code)]
  const sortedArr = codeArr.sort()
  const codeRes = []

  for (let i = 0, n = 0; i < sortedArr.length; i++) {
    const curr = sortedArr[i]
    let currCode = curr.charCodeAt()
    const next = sortedArr[i + 1] ? sortedArr[i + 1] : 'z'
    const nextCode = next.charCodeAt()
    const arr = []

    while (nextCode > currCode) {
      arr.push(String.fromCharCode(currCode))
      currCode++
      n++
    }

    if (next === 'z' && n < 26 && i === sortedArr.length - 1) {
      arr.push(String.fromCharCode(nextCode))
      let firstCode = 97
      while (n < 25) {
        arr.push(String.fromCharCode(firstCode))
        firstCode++
        n++
      }
    }

    codeRes[codeArr.indexOf(curr)] = arr
  }

  return message.replace(/./g, match => {
    const arr = codeRes.find(val => val.includes(match))
    return `${arr[0]}${arr.indexOf(match) + 1}`
  })
}
