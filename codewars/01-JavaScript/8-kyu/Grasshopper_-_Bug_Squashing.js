/**
 * Grasshopper - Bug Squashing
 * https://www.codewars.com/kata/56214b6864fe8813f1000019/train/javascript
 *
 */

var health = 100
var position = 0
var coins = 0

function main () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}
