/**
 * Statistics for an Athletic Association
 * https://www.codewars.com/kata/55b3425df71c1201a800009c/train/javascript
 *
 */

const getAvg = arr => {
  const sum = arr.reduce((acc, n) => acc + n, 0)
  return sum / arr.length
}
const getRange = arr => {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  return max - min
}
const getMedian = arr => {
  const sorted = [...arr].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid]
}
const getTime = ss => {
  const time = new Date(ss * 1000).toISOString().substring(11, 19)
  return time.replace(/:/g, '|')
}
const stat = str => {
  if (!str) return ''

  const sArr = str.split(/,\s*/g).map(t => {
    const [hh, mm, ss] = t.split('|').map(Number)
    return hh * 3600 + mm * 60 + ss
  })
  const range = getTime(getRange(sArr))
  const avg = getTime(getAvg(sArr))
  const median = getTime(getMedian(sArr))

  return `Range: ${range} Average: ${avg} Median: ${median}`
}
