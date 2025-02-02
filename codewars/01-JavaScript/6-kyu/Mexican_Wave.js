/**
 * Mexican Wave
 * https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
 *
 */

const wave = str => {
  const res = []

  for (let i = 0; i < str.length; i++) {
    str = str.toLowerCase()
    let char = str[i].toUpperCase()

    if (/\s/.test(char)) continue
    res.push(str.slice(0, i) + char + str.slice(i + 1))
  }

  return res
}
