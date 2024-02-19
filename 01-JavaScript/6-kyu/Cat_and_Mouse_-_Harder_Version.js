/**
 * Cat and Mouse - Harder Version
 * https://www.codewars.com/kata/57ee2a1b7b45efcf700001bf/train/javascript
 *
 */

const catMouse = (x, j) => {
  const animals = x.match(/[cdm]/gi)

  if (!animals || animals.length !== 3) return 'boring without all three'

  const cat = x.indexOf('C')
  const mouse = x.indexOf('m')
  const range = x.slice(Math.min(cat, mouse), Math.max(cat, mouse))

  if (range.length - 1 < j) {
    return !range.includes('D') ? 'Caught!' : 'Protected!'
  } else {
    return 'Escaped!'
  }
}
