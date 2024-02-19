/**
 * Is my function new ?
 * https://www.codewars.com/kata/652d5d55da13f3001fc1c37a/train/javascript
 *
 */

function wasCalledWithNew() {
  const valueOf = () => true

  return new.target ? { valueOf } : false
}
