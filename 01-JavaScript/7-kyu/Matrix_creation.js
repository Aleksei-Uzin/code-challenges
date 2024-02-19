/**
 * Matrix creation
 * https://www.codewars.com/kata/5a34da5dee1aae516d00004a/train/javascript
 *
 */

const getMatrix = number => {
  const res = []

  for (let i = 0; i < number; i++) {
    const arr = []

    for (let j = 0; j < number; j++) {
      if (i === j) arr.push(1)
      else arr.push(0)
    }

    res.push(arr)
  }

  return res
}
