/**
 * Who likes it?
 * https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
 *
 */

const likes = names => {
  switch(names.length) {
    case 0: return 'no one likes this'
    case 1: return `${names.at(0)} likes this`
    case 2: return `${names.at(0)} and ${names.at(1)} like this`
    case 3: return `${names.at(0)}, ${names.at(1)} and ${names.at(2)} like this`
    default: return `${names.at(0)}, ${names.at(1)} and ${names.length - 2} others like this`
  }
}
