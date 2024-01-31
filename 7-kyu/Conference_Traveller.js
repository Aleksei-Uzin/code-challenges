/**
 * Conference Traveller
 * https://www.codewars.com/kata/56f5594a575d7d3c0e000ea0/train/javascript
 *
 */

const conferencePicker = (citiesVisited, citiesOffered) => {
  for (let city of citiesOffered) {
    if (!citiesVisited.includes(city)) return city
  }

  return 'No worthwhile conferences this year!'
}
