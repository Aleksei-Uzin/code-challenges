/**
 * Initialize my name
 * https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript
 *
 */

const initializeNames = name => {
  const arr = name.split(' ')
  let fullName = name

  if(arr.length > 2) {
    let [firstName, lastName, middleName] = [arr.at(0), arr.at(-1), arr.slice(1, -1)]
    let middleNameInitialized = middleName.map(val => `${val.charAt(0)}.`).join(' ')
    fullName = `${firstName} ${middleNameInitialized} ${lastName}`
  }

  return fullName
}
