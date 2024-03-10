/**
 * What century is it?
 * https://www.codewars.com/kata/52fb87703c1351ebd200081f/train/javascript
 *
 */

const whatCentury = year =>
  year.replace(/(\d\d)(\d\d)/, (_, n1, n2) => {
    const cent = n2 === '00' ? n1 : ++n1

    if (/1\d|[^123]$/.test(cent)) return `${cent}th`
    else if (/[1]$/.test(cent)) return `${cent}st`
    else if (/[2]$/.test(cent)) return `${cent}nd`
    else return `${cent}rd`
  })
