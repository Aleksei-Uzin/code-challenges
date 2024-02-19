/**
 * Greet Me
 * https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript
 *
 */

const greet = name => {
  name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
  
  return `Hello ${name}!`
}
