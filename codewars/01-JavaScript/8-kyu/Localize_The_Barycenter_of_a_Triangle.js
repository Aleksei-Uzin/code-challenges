/**
 * Localize The Barycenter of a Triangle
 * https://www.codewars.com/kata/5601c5f6ba804403c7000004/train/javascript
 *
 */

const barTriang = (p1, p2, p3) => {
  const [xa, ya] = p1
  const [xb, yb] = p2
  const [xc, yc] = p3
  const centroidX = +((xa + xb + xc) / 3).toFixed(4)
  const centroidY = +((ya + yb + yc) / 3).toFixed(4)
  
  return [centroidX, centroidY]
}
