/**
 * Holiday Array Repair
 * https://www.codewars.com/kata/5579906f2f0c0d0766000127/train/javascript
 *
 */

const holidayCount = (a1, a2) => {
  const [n1] = a1.filter(n => Number.isInteger(n))
  const [n2] = a2.filter(n => Number.isInteger(n))

  if (n1 > n2) return 'Right'
  else if (n1 < n2) return 'Wrong'
  else if (n1 === n2) return 'Same'
  else return 'Not possible'
}
