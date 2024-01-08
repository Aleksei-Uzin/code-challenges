/**
 * Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()
 * https://www.codewars.com/kata/572af273a3af3836660014a1/train/javascript
 *
 */

// A
const infiniteLoop = (arr, d, n) => {
  if (n === 0) return arr

  for (let i = 0; i < arr.length; i++) {
    if (d === 'left') arr[i].push(arr[(i + 1) % arr.length].shift())
    if (d === 'right') arr[(i + 1) % arr.length].unshift(arr[i].pop())
  }

  return infiniteLoop(arr, d, n - 1)
}

// B

const _infiniteLoop = (arr, d, n) => {
  if (n === 0) return arr

  let temp = null

  if (d === 'left') {
    for (let i = 0; i < arr.length; i++) {
      if (temp === null) temp = arr[i].shift()

      if (i < arr.length - 1) {
        arr[i].push(arr[i + 1].shift())
      } else {
        arr[i].push(temp)
      }
    }
  }

  if (d === 'right') {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (temp === null) temp = arr[i].pop()

      if (i !== 0) {
        arr[i].unshift(arr[i - 1].pop())
      } else {
        arr[i].unshift(temp)
      }
    }
  }

  return infiniteLoop(arr, d, n - 1)
}
