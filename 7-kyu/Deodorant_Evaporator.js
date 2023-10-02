/**
 * Deodorant Evaporator
 * https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/javascript
 *
 */

const evaporator = (_, evap_per_day, threshold) => { 
  let percentage = 100
  let res = 0

  while(percentage > threshold) {
    percentage -= percentage * evap_per_day / 100
    res++
  }

  return res
}
