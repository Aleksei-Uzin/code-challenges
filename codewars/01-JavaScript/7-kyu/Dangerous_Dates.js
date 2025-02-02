/**
 * Dangerous Dates
 * https://www.codewars.com/kata/53a257d83cacabb1fd0007d3/train/javascript
 *
 */

const nextFiveDays = date => {
  const dates = []

  for (let i = 0; i < 5; i++) {
    date.setDate(date.getDate() + 1)
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    dates.push(`${month + 1}/${day}/${year}`)
  }

  return dates.join(', ')
}
