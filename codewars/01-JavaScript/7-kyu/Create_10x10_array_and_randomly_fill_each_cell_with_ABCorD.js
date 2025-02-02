/**
 * Create 10x10 array and randomly fill each cell with "A", "B", "C", or "D"
 * https://www.codewars.com/kata/56aea73c2283945da300004b/train/javascript
 *
 */

const array10 = () => {
  const letters = 'ABCD'
	let arr = [], count
  
  for(let i = 0; i < 10; i++) {
    count = [0, 0, 0, 0]
    arr.push([])

    for(let j = 0; j < 10; j++) {
      const n = ~~(4 * Math.random())
      
      if(j > 5 && count.includes(0)) {
        const index = count.indexOf(0)
        arr[i].push(letters[index])
        count[index] += 1
      } else {
        arr[i].push(letters[n])
        count[n] += 1
      }
    }
  }
  
  return arr
}
