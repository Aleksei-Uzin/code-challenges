/**
 * Pascal Problem
 * https://www.codewars.com/kata/53cae2709bbf4cb80c000575/train/javascript
 *
 */

const calculate = (c, r) => (c == r || c == 1) ? 1 : calculate(c-1, r-1) + calculate(c, r-1)

const pascal = depth => {
  const results = []
  let temp = []

  for (let r = 1; r <= depth; r++) {
    for (let c = 1; c <= r; c++) {
      temp.push(calculate(c, r))
    }

    results.push(temp)
    temp = []
  }

  return results
}
