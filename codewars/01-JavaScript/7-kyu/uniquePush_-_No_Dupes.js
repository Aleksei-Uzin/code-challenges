/**
 * uniquePush - No Dupes!
 * https://www.codewars.com/kata/53b2f6934a240823f4000abc/train/javascript
 *
 */

const uniquePush = (arr, obj) => {
  const { phoneNumber } = obj

  if (!phoneNumber || arr.some(({ phoneNumber: elem }) => elem === phoneNumber))
    return false

  return !!arr.push(obj)
}
