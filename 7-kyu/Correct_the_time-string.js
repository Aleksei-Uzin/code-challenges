/**
 * Correct the time-string
 * https://www.codewars.com/kata/57873ab5e55533a2890000c7/train/javascript
 *
 */

const timeCorrect = timestring => {
  if (!timestring) return timestring

  timestring = timestring.replace(/\`/g, '')

  if (/(^([01]\d|2[0-3]):([0-5]\d):[(0-5]\d$)/.test(timestring))
    return timestring
  if (!/^\d{2}:\d{2}:\d{2}$/.test(timestring)) return null

  const time = timestring.split(':').map((t, i, arr) => {
    t = Number(t)

    if (i === 0) return arr[1] >= 59 ? (t + 1) % 24 : t % 24
    if (i === 1) return arr[2] > 59 ? (t + 1) % 60 : t % 60
    else return t % 60
  })

  return time.map(t => t.toString().padStart(2, '0')).join(':')
}
