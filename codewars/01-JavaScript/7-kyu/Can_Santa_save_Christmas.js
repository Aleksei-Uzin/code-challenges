/**
 * Can Santa save Christmas?
 * https://www.codewars.com/kata/5857e8bb9948644aa1000246/train/javascript
 *
 */

const determineTime = durations => {
  let hours = 0

  for (const time of durations) {
    const [h, m, s] = time.split(':').map(Number)
    hours += h + m / 60 + s / 3600
  }

  return hours <= 24
}
