/**
 * The Wide-Mouthed frog! 
 * https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/javascript
 *
 */

const mouthSize = animal => {
  const isAlligator = animal.toLowerCase() === 'alligator'

  return isAlligator ? 'small' : 'wide'  
}
