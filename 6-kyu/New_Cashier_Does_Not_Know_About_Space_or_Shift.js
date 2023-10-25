/**
 * New Cashier Does Not Know About Space or Shift
 * https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/javascript
 *
 */

const getOrder = order => {
  const menu = [
    'Burger',
    'Fries',
    'Chicken',
    'Pizza',
    'Sandwich',
    'Onionrings',
    'Milkshake',
    'Coke',
  ]
  const res = []

  menu.forEach(val => {
    const re = new RegExp(val, 'gi')
    const items = order.match(re)

    if (items)
      res.push(
        ...items.map(item => item.replace(/\w/, match => match.toUpperCase()))
      )
  })

  return res.join(' ')
}
