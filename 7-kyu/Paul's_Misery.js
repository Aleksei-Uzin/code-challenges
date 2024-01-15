/**
 * Paul's Misery
 * https://www.codewars.com/kata/57ee31c5e77282c24d000024/train/javascript
 *
 */

const paul = x => {
  const obj = { kata: 5, 'Petes kata': 10, life: 0, eating: 1 }
  let res = 0

  for (let val of x) {
    res += obj[val]
  }

  if (res < 40) return 'Super happy!'
  else if (res < 70) return 'Happy!'
  else if (res < 100) return 'Sad!'
  else return 'Miserable!'
}
