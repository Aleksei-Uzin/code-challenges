/**
 * Interview Question (easy)
 * https://www.codewars.com/kata/5b358a1e228d316283001892/train/javascript
 *
 */

const getStrings = city => {
  const newCity = city.toLowerCase().replace(/[^a-z]/g, '')
  let res = ''

  for (let c of newCity) {
    const count = newCity.match(new RegExp(c, 'g')).length

    if (!res.includes(c)) {
      res += `${c}:${'*'.repeat(count)},`
    }
  }

  return res.slice(0, -1)
}
