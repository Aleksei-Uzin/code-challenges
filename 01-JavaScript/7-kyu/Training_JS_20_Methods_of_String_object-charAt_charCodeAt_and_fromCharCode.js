/**
 * Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
 * https://www.codewars.com/kata/57284d23e81185ae6200162a/train/javascript
 *
 */

const topSecret = str =>
  str.replace(/[a-z]/gi, c => {
    const code = c.charCodeAt() - 3
    return /[a-z]/.test(c)
      ? String.fromCharCode(code < 97 ? 122 - ((99 - code) % 3) : code)
      : String.fromCharCode(code < 65 ? 90 - ((67 - code) % 3) : code)
  })

//question1: The top secret file number is...
answer1 = '2609'
//question2: Super agent's name is...
answer2 = 'JjTquK'
//question3: He stole the treasure is...
answer3 = 'Barbie doll'
