/**
 * 80's Kids #5: You Can't Do That on Television
 * https://www.codewars.com/kata/5667525f0f157f7a0a000004/train/javascript
 *
 */

const bucketOf = str => {
  const isWater = /water|wet|wash/i.test(str)
  const isSlime = /(I don't know)|slime/i.test(str)

  if (isWater && isSlime) return 'sludge'

  return isWater ? 'water' : isSlime ? 'slime' : 'air'
}
