/**
 * Letterbox Paint-Squad
 * https://www.codewars.com/kata/597d75744f4190857a00008d/train/javascript
 *
 */

const paintLetterboxes = (start, end) => {
  const res = new Array(10).fill(0)

  for (let i = start; i <= end; i++) {
    const str = i.toString()

    for (let n of str) {
      res[n] ? (res[n] += 1) : (res[n] = 1)
    }
  }

  return res
}
