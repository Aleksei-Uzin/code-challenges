/**
 * Latin Squares
 * https://www.codewars.com/kata/645fb55ecf8c290031b779ef/train/javascript
 *
 */

const makeLatinSquare = n => {
  const res = []

  for (let i = 0; i < n; i++) {
    const row = res[0]?.slice(-i) || []

    for (let j = 1; j <= n - i; j++) {
      row.push(j)
    }

    res.push(row)
  }

  return res
}
