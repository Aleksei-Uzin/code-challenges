/**
 * Prize Draw
 * https://www.codewars.com/kata/5616868c81a0f281e500005c/train/javascript
 *
 */

const rank = (st, we, n) => {
  if (!st) return 'No participants'

  const names = st.split(',')
  const countArr = names.map((name, i) => {
    const sum = [...name].reduce(
      (sum, c) => sum + (c.toLowerCase().charCodeAt() % 96),
      0
    )
    return [name, (sum + name.length) * we[i]]
  })
  const sorted = countArr.sort(([nameA, sumA], [nameB, sumB]) => {
    return sumB !== sumA ? sumB - sumA : nameA.localeCompare(nameB)
  })
  const res = sorted[n - 1]

  return res ? res[0] : 'Not enough participants'
}
