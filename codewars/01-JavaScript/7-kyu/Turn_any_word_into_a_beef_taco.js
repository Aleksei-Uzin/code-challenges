/**
 * Turn any word into a beef taco
 * https://www.codewars.com/kata/59414b46d040b7b8f7000021/train/javascript
 *
 */

const tacofy = word => {
  const ingredients = []

  for (let l of word) {
    if (/[aeiou]/i.test(l)) ingredients.push('beef')
    else if (/t/i.test(l)) ingredients.push('tomato')
    else if (/l/i.test(l)) ingredients.push('lettuce')
    else if (/c/i.test(l)) ingredients.push('cheese')
    else if (/g/i.test(l)) ingredients.push('guacamole')
    else if (/s/i.test(l)) ingredients.push('salsa')
  }

  return ['shell', ...ingredients, 'shell']
}
