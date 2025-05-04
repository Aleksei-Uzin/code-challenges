export function findMajority(arr) {
  const len = arr.length
  const oneThird = ~~(len / 3)
  const obj = {}
  const res = []

  for (let i = 0; i < len; i++) {
    const elem = arr[i]

    if (Object.hasOwn(obj, elem)) obj[elem] += 1
    else obj[elem] = 1
  }

  for (let [key, val] of Object.entries(obj)) {
    if (val > oneThird) res.push(+key)
  }

  return res
}
