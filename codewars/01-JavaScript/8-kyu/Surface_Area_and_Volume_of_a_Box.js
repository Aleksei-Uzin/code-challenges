/**
 * Surface Area and Volume of a Box
 * https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript
 *
 */

const getSize = (w, h, l) => {
  const totalSurfaceArea = 2 * ((w * h) + (w * l) + (h * l))
  const volume = w * h * l
  
  return [totalSurfaceArea, volume]
}
