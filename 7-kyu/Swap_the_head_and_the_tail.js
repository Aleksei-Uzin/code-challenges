/**
 * Swap the head and the tail
 * https://www.codewars.com/kata/5a34f087c5e28462d9000082/train/javascript
 *
 */

const swapHeadAndTail = arr => {
  const len = arr.length
  const midd = ~~(len / 2)

  if (len % 2 === 1) {
    return [...arr.slice(midd + 1), arr[midd], ...arr.slice(0, midd)]
  } else {
    return [...arr.slice(midd), ...arr.slice(0, midd)]
  }
}
