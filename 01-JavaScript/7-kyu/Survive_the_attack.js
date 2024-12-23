/**
 * Survive the attack
 * https://www.codewars.com/kata/634d0f7c562caa0016debac5/train/javascript
 *
 */

const hasSurvived = (attackers, defenders) => {
  const attackersPower = attackers.reduce((acc, n) => acc + n, 0)
  const defendersPower = defenders.reduce((acc, n) => acc + n, 0)
  const len = Math.max(attackers.length, defenders.length)
  const attackersRes = []
  const defendersRes = []

  for (let i = 0; i < len; i++) {
    const soldierA = attackers[i] || 0
    const soldierD = defenders[i] || 0
    attackersRes[i] = soldierA - soldierD
    defendersRes[i] = soldierD - soldierA
  }

  const survivorA = attackersRes.filter(n => n > 0).length
  const survivorD = defendersRes.filter(n => n > 0).length

  if (survivorD > survivorA) return true
  else if (survivorA > survivorD) return false
  else if (defendersPower >= attackersPower) return true
  else return false
}
