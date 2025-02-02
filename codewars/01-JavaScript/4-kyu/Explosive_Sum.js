/**
 * Explosive Sum
 * https://www.codewars.com/kata/52ec24228a515e620b0005ef/train/javascript
 *
 * https://en.wikipedia.org/wiki/Integer_partition
 *
 */

const memo = []

const sum = (n, m = n) => {
  if (n == 0) return 1
  if (n < 0 || m == 0) return 0
  if (memo[n] && memo[n][m]) return memo[n][m]

  let res = sum(n, m - 1) + sum(n - m, m)

  if (!memo[n]) {
    memo[n] = []
  }

  memo[n][m] = res

  return res
}

console.log(sum(4))
console.log(memo)
console.log(sum(5))
console.log(memo)
console.log(sum(10))
console.log(memo)

// Test
const intParts = n => {
  const temp = Array(n).fill(1)

  while (temp[0] != n) {
    let min = temp[0]
    let minInd = 0
    let sum = temp[0]
    let sumTemp = temp[0]

    for (let j = 1; j < temp.length - 1; j++) {
      sumTemp += temp[j]

      if (min > temp[j]) {
        min = temp[j]
        minInd = j
        sum = sumTemp
      }
    }

    temp[minInd] += 1
    sum += 1
    temp.splice(minInd + 1)

    for (let k = 0; k < n - sum; k++) temp.push(1)
  }
}

// intParts(4)
