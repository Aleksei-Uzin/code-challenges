/**
 * Holiday II - Plane Seating
 * https://www.codewars.com/kata/57e8f757085f7c7d6300009a/train/javascript
 *
 */

const planeSeat = a => {
  const [n, l] = a.match(/[0-9]+|[a-hk]/gi)
  let res = ''

  if (n > 60 || !l) return 'No Seat!!'

  if (n <= 20) res = 'Front'
  else if (n <= 40) res = 'Middle'
  else res = 'Back'

  if (/[a-c]/i.test(l)) res += '-Left'
  else if (/[d-f]/i.test(l)) res += '-Middle'
  else res += '-Right'

  return res
}
