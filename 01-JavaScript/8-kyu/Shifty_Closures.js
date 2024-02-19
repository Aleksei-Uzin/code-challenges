/**
 * Shifty Closures
 * https://www.codewars.com/kata/514aa0dc21607ae236000017/train/javascript
 *
 */

const greetings = (function() {
  let name = ''
  
  return {
    greet_abe() {
      name = 'Abe'

      return "Hello, " + name + '!'
    },

    greet_ben() {
      name = 'Ben'

      return "Hello, " + name + '!'
    },
  }
})()

const { greet_abe, greet_ben } = greetings
