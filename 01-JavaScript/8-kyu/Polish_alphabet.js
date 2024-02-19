/**
 * Polish alphabet
 * https://www.codewars.com/kata/57ab2d6072292dbf7c000039/train/javascript
 *
 */

const correctPolishLetters = str => {
  const abc = {
    'ą': 'a',
    'ć': 'c',
    'ę': 'e',
    'ł': 'l',
    'ń': 'n',
    'ó': 'o',
    'ś': 's',
    'ź': 'z',
    'ż': 'z'
  }
  
  return [...str].map(x => abc[x] || x).join('')
}
