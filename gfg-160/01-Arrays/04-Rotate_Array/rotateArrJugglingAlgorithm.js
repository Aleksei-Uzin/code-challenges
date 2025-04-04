/**
 * Function to left rotate the array by d positions using Juggling Algorithm
 *
 * https://www.geeksforgeeks.org/juggling-algorithm-for-array-rotation/
 * https://stackoverflow.com/questions/23321216/rotating-an-array-using-juggling-algorithm
 *
 * Time Complexity:
 *  - O(n), as all the cycles are independent and we are not visiting any element more than once.
 *
 * Auxiliary Space:
 *  - O(1)
 *
 */

export function rotateArrJugglingAlgo(arr, d) {
  const n = arr.length

  d %= n

  let cycles = gcd(n, d)

  for (let i = 0; i < cycles; i++) {
    let startEle = arr[i]
    let currIdx = i
    let nextIdx

    while (true) {
      nextIdx = (currIdx + d) % n

      if (nextIdx === i) break

      arr[currIdx] = arr[nextIdx]
      currIdx = nextIdx
    }

    arr[currIdx] = startEle
  }
}

function gcd(a, b) {
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}
