/**
 * Transpose two strings in an array
 * https://www.codewars.com/kata/581f4ac139dc423f04000b99/train/javascript
 *
 */

const transposeTwoStrings = arr => {
  const [word1, word2] = arr.map(word => word.split(''))
  const longestLength = Math.max(word1.length, word2.length)
  let char1 = ''
  let char2 = ''
  let res = ''
  
  for(let i = 0; i < longestLength; i++) {
    char1 = word1[i] ?? ' '
    char2 = word2[i] ?? ' '

    if(i === longestLength - 1) {
      res += `${char1} ${char2}`
    } else {
      res += `${char1} ${char2}\n`
    }
  }
  
  return res
}
