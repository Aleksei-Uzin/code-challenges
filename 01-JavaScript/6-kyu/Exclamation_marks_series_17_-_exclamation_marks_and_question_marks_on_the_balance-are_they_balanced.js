/**
 * Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?
 * https://www.codewars.com/kata/57fb44a12b53146fe1000136/train/javascript
 *
 */

const balance = (left, right) => {
  const [sumLeft, sumRight] = [[...left], [...right]].map(arr =>
    arr.reduce((acc, val) => acc + (val === '!' ? 2 : 3), 0)
  )

  return sumLeft > sumRight ? 'Left' : sumLeft < sumRight ? 'Right' : 'Balance'
}
