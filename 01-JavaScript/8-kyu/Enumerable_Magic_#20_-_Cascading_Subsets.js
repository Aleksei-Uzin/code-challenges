/**
 * Enumerable Magic #20 - Cascading Subsets
 * https://www.codewars.com/kata/545af3d185166a3dec001190/train/javascript
 *
 */

function eachCons(arr, n) {
  const res = []
  
  for(let i = 0; i <= arr.length - n; i++) {
    res.push(arr.slice(i, i + n))
  }
  
	return res
}
