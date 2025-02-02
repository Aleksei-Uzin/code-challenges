/**
 * longest_palindrome
 * https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript
 *
 */

const longestPalindrome = s => {
  const match = s.match(/(\w)\w?\1/g) || []
  let res = s.length ? 1 : 0

  for (let m of match) {
    let len = m.length
    const start = s.indexOf(m)
    const end = start + len - 1
    let i = 1

    while (s[start - i] && s[end + 1] && s[start - i] === s[end + i]) {
      len += 2
      i += 1
    }

    if (res < len) res = len
  }

  return res
}
