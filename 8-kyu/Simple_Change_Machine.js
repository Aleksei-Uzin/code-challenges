/**
 * Simple Change Machine 
 * https://www.codewars.com/kata/57238766214e4b04b8000011/train/javascript
 *
 */

function changeMe(moneyIn) {
  const getCoins = amount => {
    let res = ''
    
    while(amount > 0) {
      if(amount >= 20) {
        res += '20p '
        amount -= 20
      } else if(amount < 20) {
        res += '10p '
        amount -= 10
      }
    }
    
    return res.trimEnd()
  }
  
  switch(moneyIn) {
    case '£1':
      return getCoins(100)
    case '£2':
      return getCoins(200)
    case '£5':
      return getCoins(500)
    case '50p':
      return getCoins(50)
    case '20p':
      return '10p 10p'
    default:
      return moneyIn
  }
}
