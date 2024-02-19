/**
 * Hello, Name or World!
 * https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript
 *
 */

const capitalizeName = name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
const hello = name => `Hello, ${name ? capitalizeName(name) : 'World'}!`
