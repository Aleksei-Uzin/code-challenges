/**
 * Training JS #28: methods of arrayObject---every() and some()
 * https://www.codewars.com/kata/57308546bd9f0987c2000d07/train/javascript
 *
 */

const mirrorImage = arr => {
  let n1, n2

  const res = arr.some((val, i) => {
    n1 = val
    n2 = arr[(i + 1) % arr.length]

    return n1 === +[...n2.toString()].reverse().join('')
  })

  return res ? [n1, n2] : [-1, -1]
}
