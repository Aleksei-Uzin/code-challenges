/**
 * Take a picture !
 * https://www.codewars.com/kata/56c9f47b0844d85f81000fc2/train/javascript
 *
 */

const sortPhotos = pics => {
  const sortedArr = pics.sort((a, b) => {
    const [, yearA, numA] = /(\d+)\D+(\d+)/.exec(a)
    const [, yearB, numB] = /(\d+)\D+(\d+)/.exec(b)

    return yearA !== yearB ? yearA - yearB : numA - numB
  })
  const newPics = sortedArr.slice(-1)[0].replace(/\d+$/, d => ++d)

  return [...sortedArr.slice(-5), newPics]
}
