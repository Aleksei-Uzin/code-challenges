/**
 * Sum consecutives
 * https://www.codewars.com/kata/55eeddff3f64c954c2000059/train/javascript
 *
 */

const sumConsecutives = s => {
  const res = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) res.push(s[i])
    else {
      let sum = s[i]
      for (let j = i; i < s.length; j++, i++) {
        if (s[j] === s[j + 1]) sum += s[j]
        else break
      }
      res.push(sum)
    }
  }

  return res
}
