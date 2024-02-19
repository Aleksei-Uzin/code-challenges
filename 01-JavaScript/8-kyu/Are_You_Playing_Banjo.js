/**
 * Are You Playing Banjo?
 * https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
 *
 */

function areYouPlayingBanjo(name) {
  const playingBanjo = /^[R, r]/.test(name)

  return (
    playingBanjo
    ? `${name} plays banjo`
    : `${name} does not play banjo`
  )
}
