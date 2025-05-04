/**
 * Function to find Majority elements in an array using Boyer-Moore’s Voting Algorithm
 * https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/
 *
 * Time Complexity:
 *  - O(n)
 *
 * Auxiliary Space:
 *  - O(1)
 *
 */

export function findMajority(arr) {
  const len = arr.length
  const oneThird = ~~(len / 3)
  const res = []
  let elem1 = -1
  let elem2 = -1
  let cnt1 = 0
  let cnt2 = 0

  for (let elem of arr) {
    if (elem1 === elem) {
      cnt1++
    } else if (elem2 === elem) {
      cnt2++
    } else if (cnt1 === 0) {
      elem1 = elem
      cnt1++
    } else if (cnt2 === 0) {
      elem2 = elem
      cnt2++
    } else {
      cnt1--
      cnt2--
    }
  }

  cnt1 = 0
  cnt2 = 0

  for (let ele of arr) {
    if (elem1 === ele) cnt1++
    if (elem2 === ele) cnt2++
  }

  if (cnt1 > oneThird) res.push(elem1)
  if (cnt2 > oneThird && elem1 != elem2) res.push(elem2)
  if (res.length === 2 && res[0] > res[1]) {
    ;[res[0], res[1]] = [res[1], res[0]]
  }

  return res
}
