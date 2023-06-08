/**
 * Collatz Conjecture (3n+1)
 * https://www.codewars.com/kata/577a6e90d48e51c55e000217/train/javascript
 *
 */

function hotpo(n, times = 0) {
  if(n <= 1) return times
  
  const isEven = Number.isInteger(n / 2)

  times += 1
  
  if(isEven) return hotpo((n / 2), times)
  
  return hotpo((3 * n + 1), times)
}
