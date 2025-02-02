/**
 * What's A Name In?
 * https://www.codewars.com/kata/59daf400beec9780a9000045/train/javascript
 *
 */

const nameInStr = (str, name) => {
  const strReg = name.split('').join('.*')

  return new RegExp(strReg, 'i').test(str)
}
