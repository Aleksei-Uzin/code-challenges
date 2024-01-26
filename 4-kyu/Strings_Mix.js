/**
 * Strings Mix
 * https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript
 *
 */

const mix = (s1, s2) => {
  const str = s1.concat(s2).replace(/[^a-z]/g, '')
  const set = new Set(str)
  let res = []

  for (let c of set) {
    const reg = new RegExp(c, 'g')
    const str1 = (s1.match(reg) || []).join('')
    const str2 = (s2.match(reg) || []).join('')

    if (
      (str1.length === 1 && str2.length === 1) ||
      (str1.length === 1 && !str2) ||
      (str2.length === 1 && !str1)
    )
      continue
    if (str1 > str2) res.push(`1:${str1}`)
    else if (str1 < str2) res.push(`2:${str2}`)
    else res.push(`=:${str1}`)
  }

  return res
    .sort((a, b) => {
      const strA = a.slice(2)
      const strB = b.slice(2)

      if (strA.length > strB.length) return -1
      else if (strA.length < strB.length) return 1

      const nA = a[0]
      const nB = b[0]

      if (nA < nB) return -1
      else if (nA > nB) return 1

      return strA.localeCompare(strB)
    })
    .join('/')
}
