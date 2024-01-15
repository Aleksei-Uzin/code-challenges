/**
 * All or Nothing
 * https://www.codewars.com/kata/65112af7056ad6004b5672f8/train/javascript
 *
 */

const possiblyPerfect = (key, answers) => {
  let res = null

  for (let i = 0; i < key.length; i++) {
    if (key[i] !== '_') {
      const match = key[i] === answers[i]

      if (res === null) {
        res = match
        continue
      }

      if (res !== match) return false
    }
  }

  return true
}
