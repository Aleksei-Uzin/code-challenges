/**
 * Finish Guess the Number Game
 * https://www.codewars.com/kata/568018a64f35f0c613000054/train/javascript
 *
 */

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if(!this.lives) throw Error('already dead')
    
    if(n !== this.number) {
      this.lives = this.lives - 1

      return false
    }
    
    return true
  }
}
