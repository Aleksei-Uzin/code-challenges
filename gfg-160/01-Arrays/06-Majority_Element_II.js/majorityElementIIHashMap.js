/**
 * Function to find Majority elements in an array using hash map
 *
 * Time Complexity:
 *  - O(n)
 *
 * Auxiliary Space:
 *  - O(n)
 *
 */

export function findMajority(arr) {
  const len = arr.length
  const oneThird = ~~(len / 3)
  const freq = {}
  const res = []

  for (const elem of arr) {
    freq[elem] = (freq[elem] || 0) + 1
  }

  for (const it in freq) {
    const elem = Number(it)
    const cnt = freq[it]

    if (cnt > oneThird) res.push(elem)
  }

  if (res.length === 2 && res[0] > res[1]) {
    ;[res[0], res[1]] = [res[1], res[0]]
  }

  return res
}
