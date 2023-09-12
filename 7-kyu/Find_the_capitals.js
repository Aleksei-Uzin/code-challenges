/**
 * Find the capitals
 * https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
 *
 */

const capitals = word => {
	const arr = []

  word.split('').forEach((x, i) => {
    if(x.toUpperCase() === x) {
      arr.push(i)
    }
  })

  return arr
}
