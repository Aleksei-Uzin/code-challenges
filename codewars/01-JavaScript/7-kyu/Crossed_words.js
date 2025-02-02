/**
 * Crossed words
 * https://www.codewars.com/kata/5b72970db3d977e0f9000030/train/javascript
 *
 */

const crossedwords = (str1, str2) => {
  const ind2 = str2.search(new RegExp(`[${str1}]`, 'i'))
  const ind1 = str1.indexOf(str2[ind2])
  const res = Array.from({ length: str2.length }, (_, i) =>
    i === ind2
      ? [...str1]
      : Array.from({ length: str1.length }, (_, j) =>
          j === ind1 ? str2[i] : ' '
        )
  )

  return `${res.map(arr => arr.join('')).join('\n')}\n`
}
