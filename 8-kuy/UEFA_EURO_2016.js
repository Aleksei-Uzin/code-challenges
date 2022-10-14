/**
 * UEFA EURO 2016
 * https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/57613fb1033d766171000d60/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * 
 */

function uefaEuro2016(teams, scores){
  const [firstTeam, secondTeam] = teams
  const [firstScore, secondScore] = scores
  const teamLineUps = `At match ${firstTeam} - ${secondTeam}`
  
  if(firstScore > secondScore) {
    return `${teamLineUps}, ${firstTeam} won!`
  }
  
  if(firstScore < secondScore) {
    return `${teamLineUps}, ${secondTeam} won!`
  }
  
  return `${teamLineUps}, teams played draw.`
}
