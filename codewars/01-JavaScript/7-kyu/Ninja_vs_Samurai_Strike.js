/**
 * Ninja vs Samurai: Strike
 * https://www.codewars.com/kata/517b0f33cd023d848d000001/train/javascript
 *
 */

var Warrior = function(name) {
  this.name = name;  
  this.health = 100;
}

Warrior.prototype.strike = function(enemy, swings) {
  enemy.health = Math.max(0, enemy.health - (swings * 10));   
}
