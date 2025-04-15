/**
 * Jumping Kangaroos
 * https://www.codewars.com/kata/5ae7e1522c5061beb7000051
 *
 */

const kangaroo = (kanga1, rate1, kanga2, rate2) => {
  if (rate1 === rate2) return kanga1 === kanga2
  const n = (kanga2 - kanga1) / (rate1 - rate2)
  return n > 0 && Number.isInteger(n)
}
