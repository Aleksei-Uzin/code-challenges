/**
 * Rainfall
 * https://www.codewars.com/kata/56a32dd6e4f4748cc3000006/train/javascript
 *
 */

const values = (town, str) => {
  const value = str.match(new RegExp(`${town}:.+\\n?`, 'g'))

  return value ? value[0].match(/\d+\.\d+/g).map(parseFloat) : null
}

const mean = (town, str) => {
  const nums = values(town, str)

  return nums ? nums.reduce((sum, n) => sum + n, 0) / 12 : -1
}

const variance = (town, str) => {
  const avg = mean(town, str)

  return avg !== -1
    ? values(town, str).reduce((acc, n) => acc + (avg - n) ** 2, 0) / 12
    : -1
}
