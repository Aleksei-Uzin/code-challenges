/**
 * A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
 * https://www.codewars.com/kata/562e98755e9214cd2500003d/train/javascript
 *
 */

const yourFutureCareer = () => {
	var career = Math.random()

  if (career <= 0.32) {
    return 'FrontEnd Developer'
  } else if(career <= 0.65) {
    return 'BackEnd Developer'
  } else {
    return 'Full-Stack Developer'
  }
}
