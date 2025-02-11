/**
 * One Line Task: Simple Moon Rating
 * https://www.codewars.com/kata/5be8e1bb88c754481f000466/train/javascript
 *
 */

moonRating = r => ('o'.repeat((r += 0.5) >> 1) + ['c'[~r % 2]]).padEnd(5, 'x')
