/**
 * Test's results
 * https://www.youtube.com/watch?v=QZt0aZPwrIA
 *
 */

const testResult = arr => {
  const sum = arr.reduce((sum, n) => sum + n, 0)
  const avg = +(sum / arr.length).toFixed(3)
  const a = arr.filter(n => n === 7 || n === 8).length
  const h = arr.filter(n => n > 8).length
  const l = arr.filter(n => n < 7).length

  return h === arr.length
    ? [avg, { h, a, l }, 'They did well']
    : [avg, { h, a, l }]
}
