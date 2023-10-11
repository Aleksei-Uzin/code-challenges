/**
 * Common Substrings
 * https://www.codewars.com/kata/5669a5113c8ebf16ed00004c/train/javascript
 *
 */

const SubstringTest = (str1, str2) => {
  for (let i = 0; i < str1.length - 1; i++) {
    if (new RegExp(str1.substring(i, i + 2), 'gi').test(str2)) return true
  }

  return false
}
