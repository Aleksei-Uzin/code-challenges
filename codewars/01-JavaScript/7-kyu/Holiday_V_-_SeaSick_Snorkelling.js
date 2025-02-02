/**
 * Holiday V - SeaSick Snorkelling
 * https://www.codewars.com/kata/57e90bcc97a0592126000064/train/javascript
 *
 */

const seaSick = x => {
  const changes = (x.match(/_(?=~)|~(?=_)/g) || []).length

  return (changes * 100) / x.length > 20 ? 'Throw Up' : 'No Problem'
}
