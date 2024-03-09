/**
 * Sort by binary ones
 * https://www.codewars.com/kata/59eb28fb0a2bffafbb0000d6/train/javascript
 *
 */

const sortByBinaryOnes = list => {
  return list.sort((a, b) => {
    const s1 = a.toString(2)
    const s2 = b.toString(2)
    const n1 = s1.replace(/0/g, '').length
    const n2 = s2.replace(/0/g, '').length

    if (n1 !== n2) return n2 - n1
    if (s1.length !== s2.length) return s1.length - s2.length
    return a - b
  })
}
