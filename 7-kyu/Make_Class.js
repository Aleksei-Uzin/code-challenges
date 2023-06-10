/**
 * Make Class
 * https://www.codewars.com/kata/5d774cfde98179002a7cb3c8/train/javascript
 *
 */

function makeClass(...props) { 
  return function(...args) { 
    props.forEach((prop, i) => this[prop] = args[i]) 
  }
}
