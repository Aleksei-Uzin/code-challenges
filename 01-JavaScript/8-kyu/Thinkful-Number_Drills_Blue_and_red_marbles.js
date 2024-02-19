/**
 * Thinkful - Number Drills: Blue and red marbles
 * https://www.codewars.com/kata/5862f663b4e9d6f12b00003b/train/javascript
 *
 */

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const remainderBlue = blueStart - bluePulled
  const remainderRed = redStart - redPulled
  
  return remainderBlue / (remainderRed + remainderBlue)
}
