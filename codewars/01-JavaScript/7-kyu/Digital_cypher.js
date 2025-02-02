/**
 * Digital cypher
 * https://www.codewars.com/kata/592e830e043b99888600002d/train/javascript
 *
 */

const encode = (str, n) =>
  str.split('').map((val, i) => {
    const code = n.toString()
    const num = i % code.length

    return (val.charCodeAt() % 96) + Number(code[num])
  })
