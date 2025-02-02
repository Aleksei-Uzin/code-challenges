/**
 * Measuring Average Speed
 * https://www.codewars.com/kata/57b365f81fae8a0571000142/train/javascript
 *
 */

const calculateSpeed = (distance, time) => {
  const [distNum, timeNum] = [distance, time].map(n => Number.parseInt(n))
  const m = /\dm$/.test(distance) ? distNum : distNum * 1e3
  const s = /s$/.test(time) ? timeNum : timeNum * 60

  return `${Math.round((m / s) * 2.23694)}mph`
}
