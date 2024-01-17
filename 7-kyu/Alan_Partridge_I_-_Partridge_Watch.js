/**
 * Alan Partridge I - Partridge Watch
 * https://www.codewars.com/kata/5808c8eff0ed4210de000008/train/javascript
 *
 */

const part = x => {
  const terms = [
    'Partridge',
    'PearTree',
    'Chat',
    'Dan',
    'Toblerone',
    'Lynn',
    'AlphaPapa',
    'Nomad',
  ]
  const relatedTerms = x.filter(val => terms.includes(val))
  const len = relatedTerms.length

  return len > 0
    ? `Mine's a Pint${'!'.repeat(len)}`
    : "Lynn, I've pierced my foot on a spike!!"
}
