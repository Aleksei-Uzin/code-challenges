/**
 * Bingo ( Or Not )
 * https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145/train/javascript
 *
 */

const bingo = arr => {
  let isWin = true;
  
  [2, 7, 9, 14, 15].forEach(x => {
    if(!arr.includes(x)) {
      isWin = false
    }
  })
  
  return isWin ? 'WIN' : 'LOSE'
}
