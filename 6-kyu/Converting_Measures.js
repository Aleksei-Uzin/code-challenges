/**
 * Converting Measures
 * https://www.codewars.com/kata/5acfab8d23c81836c90000eb/train/javascript
 *
 */

const convertRecipe = recipe =>
  recipe.replace(/(\d+\/)?\d+\s*tb?sp/g, str => {
    const [a, b = 1] = str.match(/\d+/g)
    const val = /tbsp/.test(str) ? 15 : 5
    return `${str} (${Math.ceil((a / b) * val)}g)`
  })
