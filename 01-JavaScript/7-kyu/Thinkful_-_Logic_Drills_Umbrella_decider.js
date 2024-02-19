/**
 * Thinkful - Logic Drills: Umbrella decider
 * https://www.codewars.com/kata/5865a28fa5f191d35f0000f8/train/javascript
 *
 */

const takeUmbrella = (weather, chance) => {
  switch(weather) {
    case 'sunny': return chance > 0.5
    case 'cloudy': return chance > 0.2
    case 'rainy': return true
  }
}
