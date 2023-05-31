/**
 * OOP: Object Oriented Piracy 
 * https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript
 *
 */

function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
 }
 
Ship.prototype.isWorthIt = function() {
  const crewWeight = this.crew * 1.5
  const isWorth = this.draft - crewWeight > 20
  
  return isWorth
}
