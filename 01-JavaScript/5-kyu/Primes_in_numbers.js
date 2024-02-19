/**
 * Primes in numbers
 * https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript
 * 
 * https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
 *
 */

const putValues = (nums, res) => num => {
  if(!nums.includes(num)) nums.push(num)

  let index = nums.indexOf(num)

  !res[index] ? res[index] = { [num]: 1 } : res[index][num] += 1
}

const primeFactors = n => {
  const nums = []
  const res = []
  const putNum = putValues(nums, res)

  while(n % 2 == 0) {
    putNum(2)
    n = Math.floor(n / 2)
  }

  for(let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    while(n % i == 0) {
      putNum(i)
      n = Math.floor(n / i)
    }
  }

  if(n > 2) putNum(n)

  return res.reduce((acc, val) => {
    const num = nums.shift()
    return val[num] > 1 ? acc += `(${num}**${val[num]})` : acc += `(${num})`
  }, '')
}
