/**
 * The Office III - Broken Photocopier
 * https://www.codewars.com/kata/57ed56657b45ef922300002b/train/javascript
 *
 */

const broken = x => x.split('').map(n => n === '0' ? '1' : '0').join('')
