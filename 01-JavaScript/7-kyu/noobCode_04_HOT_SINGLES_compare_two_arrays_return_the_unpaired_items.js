/**
 * noobCode 04: HOT SINGLES...compare two arrays, return the unpaired items !
 * https://www.codewars.com/kata/57475353facb0e7431000651/train/javascript
 *
 */

const hotSingles = (arr1, arr2) => {
  const res1 = arr1.filter(val => !arr2.includes(val))
  const res2 = arr2.filter(val => !arr1.includes(val))

  return [...res1, ...res2].filter((val, i, arr) => arr.indexOf(val) === i)
}
