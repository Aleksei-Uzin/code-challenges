/**
 * Find Screen Size
 * https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/train/javascript
 *
 */

const findScreenHeight = (width, ratio) => {
  const [w, h] = ratio.split(':').map(Number)

  return `${width}x${~~(width * (h / w))}`
}
