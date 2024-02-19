/**
 * String reverse slicing 101
 * https://www.codewars.com/kata/586efc2dcf7be0f217000619/train/javascript
 *
 */

// A
const reverseSlice = str => {
  const reversedStr = [...str].reverse().join('')

  return Array.from({ length: str.length }).reduce(
    (acc, _, i) => (acc.push(reversedStr.slice(i)), acc),
    []
  )
}

// B
const _reverseSlice = str => {
  return getList([...str].reverse().join(''))

  function getList(str, arr = []) {
    if (str.length === 0) return arr

    arr.push(str)

    return getList(str.slice(1), arr)
  }
}
