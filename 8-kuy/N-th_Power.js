/**
 * N-th Power
 * https://www.codewars.com/kata/57d814e4950d8489720008db/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/57d814e4950d8489720008db/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * 
 */

function index(array, n){
  const nThElement = array[n]

  return nThElement ? Math.pow(nThElement, n) : -1
}
