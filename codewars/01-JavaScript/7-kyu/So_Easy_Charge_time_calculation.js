/**
 * So Easy: Charge time calculation
 * https://www.codewars.com/kata/57ea0ee4491a151fc5000acf/train/javascript
 *
 */

const calculateTime = (battery, charger) => {
  const fast = (battery * 0.85) / charger
  const decr = (battery * 0.1) / (charger * 0.5)
  const trickle = (battery * 0.05) / (charger * 0.2)

  return +(fast + decr + trickle).toFixed(2)
}
