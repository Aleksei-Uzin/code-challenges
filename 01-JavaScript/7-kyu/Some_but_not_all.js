/**
 * Some (but not all)
 * https://www.codewars.com/kata/60dda5a66c4cf90026256b75/train/javascript
 *
 */

const someButNotAll = (seq, pred) => {
  const arr = Array.from(seq)
  const res = arr.filter(pred)
  const resLen = res.length
  const seqLen = arr.length

  return resLen > 0 && resLen < seqLen
}
