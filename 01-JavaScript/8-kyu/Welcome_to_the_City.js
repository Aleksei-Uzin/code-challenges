/**
 * Welcome to the City
 * https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/javascript
 *
 */

const sayHello = (name, city, state) => {  
  let fullName = ''
        
  name.forEach(part => fullName += ` ${part}`)
  
  return `Hello,${fullName}! Welcome to ${city}, ${state}!`
}
