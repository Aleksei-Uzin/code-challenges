/**
 * Count the days!
 * https://www.codewars.com/kata/5837fd7d44ff282acd000157/train/javascript
 *
 */

const countDays = d => {
  const dateA = new Date(d)
  const dateB = new Date()

  if (dateA.toDateString() === dateB.toDateString()) {
    return 'Today is the day!'
  } else if (dateA < dateB) {
    return 'The day is in the past!'
  } else {
    const n = Math.round((dateA - dateB) / (1000 * 60 * 60 * 24))
    return `${n} days`
  }
}
