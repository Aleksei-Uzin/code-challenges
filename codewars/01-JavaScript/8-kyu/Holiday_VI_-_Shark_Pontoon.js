/**
 * Holiday VI - Shark Pontoon
 * https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript
 *
 */

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  const myTime = Math.round(pontoonDistance / youSpeed)
  const sharkSpeedWithDolphin = dolphin ? sharkSpeed / 2 : sharkSpeed
  const sharkTime = Math.round(sharkDistance / sharkSpeedWithDolphin)
  const isAlive = sharkTime > myTime

  return isAlive ? 'Alive!' : 'Shark Bait!'
}
