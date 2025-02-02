/**
 * Offspring Traits
 * https://www.codewars.com/kata/5b011461de4c7f8d78000052/train/javascript
 *
 */

const bearFur = ([clr1, clr2]) => {
  if (clr1 === clr2) return clr1

  const mix = `${clr1}${clr2}`

  if (/(?=.*black)(?=.*brown).*/.test(mix)) return 'dark brown'
  else if (/(?=.*black)(?=.*white).*/.test(mix)) return 'grey'
  else if (/(?=.*brown)(?=.*white).*/.test(mix)) return 'light brown'
  else return 'unknown'
}
