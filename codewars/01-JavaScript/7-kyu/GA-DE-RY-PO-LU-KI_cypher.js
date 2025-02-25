/**
 * GA-DE-RY-PO-LU-KI cypher
 * https://www.codewars.com/kata/592a6ad46d6c5a62b600003f/train/javascript
 *
 */

const key = {
  G: 'A',
  A: 'G',
  g: 'a',
  a: 'g',
  D: 'E',
  E: 'D',
  d: 'e',
  e: 'd',
  R: 'Y',
  Y: 'R',
  r: 'y',
  y: 'r',
  P: 'O',
  O: 'P',
  p: 'o',
  o: 'p',
  L: 'U',
  U: 'L',
  l: 'u',
  u: 'l',
  K: 'I',
  I: 'K',
  k: 'i',
  i: 'k',
}
const encode = str => [...str].reduce((acc, l) => acc + (key[l] || l), '')
const decode = str => encode(str)
