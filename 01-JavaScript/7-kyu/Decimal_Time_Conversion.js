/**
 * Decimal Time Conversion
 * https://www.codewars.com/kata/6397b0d461067e0030d1315e/train/javascript
 *
 */

const calcTime = t => t / 0.6 / 100
const parseTime = ([h, m]) => Number(h) + calcTime(m)

const toIndustrial = time => {
  const indTime = Number.isInteger(time)
    ? calcTime(time)
    : parseTime(time.split(':'))

  return Number.parseFloat(indTime.toFixed(2))
}

const toNormal = time => {
  const [h, m = 0] = time.toString().split(/\D/)
  const mNew = m.length === 2 ? m : `${m}0`
  const mCalc = Math.round(Number(mNew) * 0.6).toString()

  return mCalc.length < 2 ? `${h}:0${mCalc}` : `${h}:${mCalc}`
}
