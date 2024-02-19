/**
 * FizzBuzz Backwards
 * https://www.codewars.com/kata/59ad13d5589d2a1d84000020/train/javascript
 *
 */

const reverseFizzBuzz = array => {
  const keys = []
  const res = []

  for (let i = 0; res.length < 2; i++) {
    if (/(^Fizz$)|(^Buzz$)/.test(array[i]) && !keys.includes(array[i])) {
      keys.includes('Fizz') ? res.push(i + 1) : res.unshift(i + 1)
      keys.push(array[i])
    }

    if (/FizzBuzz/.test(array[i])) {
      keys.includes('FizzBuzz')
        ? res.push(res[0])
        : keys.includes('Buzz')
        ? res.unshift(i + 1)
        : res.push(i + 1)
      keys.push(array[i])
    }
  }

  return res
}

// Best Practices
//
// function reverseFizzBuzz(array) {
//   var fizz = (array.indexOf("Fizz") + 1) ? array.indexOf("Fizz") + 1 : array.indexOf("FizzBuzz") + 1
//   var buzz = (array.indexOf("Buzz") + 1) ? array.indexOf("Buzz") + 1 : array.indexOf("FizzBuzz") + 1

// return [fizz,buzz]
// }
