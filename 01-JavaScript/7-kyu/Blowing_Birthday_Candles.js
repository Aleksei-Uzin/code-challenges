/**
 * Blowing Birthday Candles
 * https://www.codewars.com/kata/6630da20f925eb3007c5a498/train/javascript
 *
 */

const blowCandles = (str, n = 0) => {
  str = str.replace(/^0{1,}/g, '')

  if (str.length === 0 || /^0+$/.test(str)) return n

  str = str.replace(/^\d{1,3}/, m => m.replace(/[1-9]/g, n => n - 1))

  return blowCandles(str, n + 1)
}
