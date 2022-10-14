/**
 * Holiday VI - Shark Pontoon
 * https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/reviews/57e921e1b36340f1fd00005b/groups/634737589f0a140001432287
 *
 */

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  const myTime = Math.round(pontoonDistance / youSpeed)
  const sharkSpeedWithDolphin = dolphin ? sharkSpeed / 2 : sharkSpeed
  const sharkTime = Math.round(sharkDistance / sharkSpeedWithDolphin)
  const isAlive = sharkTime > myTime

  return isAlive ? 'Alive!' : 'Shark Bait!'
}
