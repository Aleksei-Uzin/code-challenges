/**
 * Santa's Master Plan
 * https://www.codewars.com/kata/52afd1fe8f7c52a0e1000304/train/javascript
 *
 */

const getAttendees = (peopleInvited, responses) =>
  peopleInvited.filter(person => {
    const hasName = responses.some(({ name }) => name === person)
    const isResponse = responses.some(
      ({ name, response }) => name === person && response === 'accepted'
    )

    return isResponse || !hasName
  })
