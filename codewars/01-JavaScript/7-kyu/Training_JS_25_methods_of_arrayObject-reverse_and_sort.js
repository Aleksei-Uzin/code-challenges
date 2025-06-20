/**
 * Training JS #25: methods of arrayObject---reverse() and sort()
 * https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript
 *
 */

const sortIt = arr => {
  const newArr = arr.slice()
  const cache = {}
  const calc = n => calcN(arr, cache, n)

  newArr.sort((a, b) => {
    const n1 = calc(a)
    const n2 = calc(b)

    if (n1 === n2) return b - a
    else return n1 - n2
  })

  return newArr
}

const calcN = (arr, cache, n) => {
  if (Object.hasOwn(n)) return cache[n]

  let c = 0

  for (let elem of arr) {
    if (elem === n) c++
  }

  return c
}
