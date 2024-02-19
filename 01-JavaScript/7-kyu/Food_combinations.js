/**
 * Food combinations
 * https://www.codewars.com/kata/565f448e6e0190b0a40000cc/train/javascript
 *
 */

const actuallyReallyGood = foods => {
  const q = "You know what's actually really good?"
  const capitalize = food => food.slice(0, 1).toUpperCase() + food.slice(1)
  const copy = foods.slice().map(food => food.toLowerCase())
  const foodA = copy[0]
  const foodB = copy.find(food => food !== foodA)

  return foodA
    ? `${q} ${capitalize(foodA)} and ${!foodB ? `more ${foodA}` : foodB}.`
    : `${q} Nothing!`
}
