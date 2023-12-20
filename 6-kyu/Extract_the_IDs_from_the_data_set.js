/**
 * Extract the IDs from the data set
 * https://www.codewars.com/kata/5158bfce931c51b69b000001/train/javascript
 *
 */

const extractIds = (data, res = []) => {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (key === 'id') res.push(data[key])
      else extractIds(data[key], res)
    }
  }

  return res
}

const data = {
  id: 1,
  items: [{ id: 2 }, { id: 3, items: [{ id: 4 }, { id: 5 }] }],
}

console.log(extractIds(data))
