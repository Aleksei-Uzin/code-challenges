/**
 * A wolf in sheep's clothing
 * https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript
 * 
 */

function warnTheSheep(queue) {
  const wolfIndex = queue.lastIndexOf('wolf')
  const lastIndex = queue.length - 1
  const isWolfNear = wolfIndex === lastIndex

  if (isWolfNear) {
    return 'Pls go away and stop eating my sheep'
  }

  return `Oi! Sheep number ${lastIndex - wolfIndex}! You are about to be eaten by a wolf!`
}
