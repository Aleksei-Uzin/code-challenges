/**
 * Timmy Time
 * https://www.codewars.com/kata/56b84da91d36bbfd7a0006e0/train/javascript
 *
 */

const changeTime = (input, delta) => {
  const [hh, mm] = input.split(':').map(Number)
  const time = new Date()
  time.setHours(hh)
  time.setMinutes(mm + delta)
  return time.toLocaleTimeString('it-IT').replace(/:\d+$/, '')
}
