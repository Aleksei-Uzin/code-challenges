/**
 * Almost Even
 * https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b/train/javascript
 *
 */

const splitInteger = (num, parts) => {
  const part = Math.floor(num / parts)
  const res = new Array(parts).fill(part)
  const sum = res.reduce((acc, val) => acc + val)
  const len = res.length
  let diff = num - sum

  if (diff === 0) return res

  for (let i = len - 1; i >= len - diff; i--) {
    res[i] += 1
  }

  return res
}
