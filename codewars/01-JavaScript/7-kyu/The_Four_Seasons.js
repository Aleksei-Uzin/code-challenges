/**
 * The Four Seasons
 * https://www.codewars.com/kata/5846174c5955406d02000b59/train/javascript
 *
 */

const fourSeasons = d => {
  if (d > 365) return 'The year flew by!'

  let season = ''

  if (d >= 80 && d <= 171) season = 'Spring'
  else if (d >= 172 && d <= 263) season = 'Summer'
  else if (d >= 264 && d <= 354) season = 'Autumn'
  else season = 'Winter'

  return `${season} Season`
}
