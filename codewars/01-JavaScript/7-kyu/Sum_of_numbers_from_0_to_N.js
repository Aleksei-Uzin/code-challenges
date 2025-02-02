/**
 * Sum of numbers from 0 to N
 * https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/javascript
 *
 */

const SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count < 0) return `${count}<0`
    if (count === 0) return `${count}=0`

    const res = []

    for (let i = 0; i <= count; res.push(i++));

    return `${res.join('+')} = ${res.reduce((acc, n) => acc + n)}`
  }

  return SequenceSum
})()
