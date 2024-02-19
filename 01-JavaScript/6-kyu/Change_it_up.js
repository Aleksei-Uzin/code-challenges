/**
 * Change it up
 * https://www.codewars.com/kata/58039f8efca342e4f0000023/train/javascript
 *
 */

const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const vowelsToUpper = val => ['a', 'e', 'i', 'o', 'u'].includes(val) ? val.toUpperCase() : val

const changer = str => {
  const arr = str.split('').map(val => {
    const index = abc.indexOf(val.toLowerCase())
    const nextLetter = index === 25 ? abc.at(0) : abc.at(index + 1)

    return index > -1 ? vowelsToUpper(nextLetter) : val
  })

  return arr.join('')
}
