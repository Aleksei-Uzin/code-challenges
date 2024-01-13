/**
 * Podcast Speed Listening Calculator
 * https://www.codewars.com/kata/5a08bb3c80171f4b040000fc/train/javascript
 *
 */

const formatTime = t => (t < 10 ? `0${t}` : t)
const speedListen = (audioLength, playSpeed) => {
  const [hh, mm, ss] = audioLength.split(':').map(val => Number.parseInt(val))
  const totalSec = hh * 3600 + mm * 60 + ss
  let newSec = totalSec / playSpeed
  let newHH = 0,
    newMM = 0,
    newSS = 0

  while (newSec > 0) {
    if (newSec >= 3600) {
      newSec -= 3600
      newHH++
      continue
    } else if (newSec >= 60) {
      newSec -= 60
      newMM++
      continue
    } else {
      newSS = ~~newSec
      newSec = 0
    }
  }

  return `${formatTime(newHH)}:${formatTime(newMM)}:${formatTime(newSS)}`
}
