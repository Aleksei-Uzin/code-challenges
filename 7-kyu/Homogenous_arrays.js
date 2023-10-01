/**
 * Homogenous arrays
 * https://www.codewars.com/kata/57ef016a7b45ef647a00002d/train/javascript
 *
 */

const filterHomogenous = arrays =>
  arrays.filter(([first, ...rest]) => {
    const type = typeof first

    return (
      type !== 'undefined'
        ? rest.reduce((acc, val) => acc === typeof val ? type : false, type)
        : false
    )
  })
