/**
 * Organise duplicate numbers in list
 * https://www.codewars.com/kata/5884b6550785f7c58f000047/train/javascript
 *
 */

const group = arr =>
  arr.reduce((acc, n) => {
    const ind = acc.findIndex(val => val.includes(n))

    if (ind !== -1) acc[ind].push(n)
    else acc.push([n])

    return acc
  }, [])
