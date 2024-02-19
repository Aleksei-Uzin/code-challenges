/**
 * Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
 * https://www.codewars.com/kata/583d972b8bbc0402cf000121/train/javascript
 *
 */

const askForMissingDetails = list =>
  list.filter(obj => {
    const [ lostProperty ] = Object.keys(obj).filter(prop => obj[prop] === null)

    if(lostProperty) {
      obj.question = `Hi, could you please provide your ${lostProperty}.`

      return obj
    }
  })
