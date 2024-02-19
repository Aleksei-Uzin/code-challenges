/**
 * Calculate age in years
 * https://www.codewars.com/kata/521660e064dc2ccdd900008d/train/javascript
 *
 */

/**
 * Return the difference between a birthdate and an optional "now" date, in years
 *
 * @param {Date} birthDate
 * @param {Date} nowDate
 * @return  {Number}
 */
const getAge = (birthDate, nowDate = new Date()) => {
  const monthNow = nowDate.getMonth()
  const monthPast = birthDate.getMonth()
  const yearNow = nowDate.getFullYear()
  const yearPast = birthDate.getFullYear()
  const diff = yearNow - yearPast

  if (monthPast === monthNow) {
    return nowDate.getDate() < birthDate.getDate() ? diff - 1 : diff
  } else if (monthPast > monthNow) {
    return diff - 1
  } else {
    return diff
  }
}
