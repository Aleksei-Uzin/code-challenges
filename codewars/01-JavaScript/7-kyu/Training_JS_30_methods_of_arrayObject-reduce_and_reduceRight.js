/**
 * Training JS #30: methods of arrayObject---reduce() and reduceRight()
 * https://www.codewars.com/kata/573156709a231dcec9000ee8/train/javascript
 *
 */

const tailAndHead = arr =>
  arr
    .reduce((acc, val, i) => {
      if (i === arr.length - 1) return acc

      const a = val % 10
      const b = +arr[i + 1].toString().slice(0, 1)
      acc.push(a + b)

      return acc
    }, [])
    .reduce((a, b) => a * b)
