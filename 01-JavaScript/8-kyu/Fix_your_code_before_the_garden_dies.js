/**
 * Fix your code before the garden dies!
 * https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript
 *
 */

const rainAmount = rainAmount => {
  if (rainAmount < 40) {
    return `You need to give your plant ${40 - rainAmount}mm of water`
  } else {
    return "Your plant has had more than enough water for today!"
  }
}
