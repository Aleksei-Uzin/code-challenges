/**
 * Function to find Majority elements in an array using nested loops
 *
 * Time Complexity:
 *  - O(n^2)
 *
 * Auxiliary Space:
 *  - O(1)
 *
 */

export function findMajority(arr) {
  const len = arr.length
  const res = []

  for (let i = 0; i < len; i++) {
    let cnt = 0

    for (let j = i; j < len; j++) {
      if (arr[j] === arr[i]) cnt += 1
    }

    if (cnt > len / 3) {
      if (res.length === 0 || arr[i] !== res[0]) res.push(arr[i])
    }

    if (res.length === 2) {
      if (res[0] > res[1]) {
        ;[res[0], res[1]] = [res[1], res[0]]
      }
      break
    }
  }

  return res
}
