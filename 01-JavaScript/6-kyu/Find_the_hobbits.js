/**
 * Find the hobbits!
 * https://www.codewars.com/kata/55703a2a52dd10501c000131/train/javascript
 *
 */

const findHobbitsIn = manifest =>
  manifest.filter(
    ({ race, home }) =>
      /halfling|hobbit/i.test(race) || /shire|farthing|hobbiton/i.test(home)
  )
