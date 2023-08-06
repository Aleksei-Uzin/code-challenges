/**
 * Coding Meetup #14 - Higher-Order Functions Series - Order the food
 * https://www.codewars.com/kata/583952fbc23341c7180002fd/train/javascript
 *
 */

const orderFood = list => {
  const food = {}
  
  list.forEach(element => {
    let { meal } = element

    !food[meal] ? food[meal] = 1 : food[meal] += 1
  })
  
  return food
}
