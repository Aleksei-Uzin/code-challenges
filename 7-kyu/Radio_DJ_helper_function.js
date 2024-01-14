/**
 * Radio DJ helper function
 * https://www.codewars.com/kata/561bbcb0fbbfb0f5010000ee/train/javascript
 *
 */

// songs - preloaded object
const longestPossible = seconds => {
  const obj = {}

  for (let { title, playback } of songs) {
    const [mm, ss] = playback.split(':').map(Number)
    const songTime = mm * 60 + ss

    if (songTime <= seconds) {
      obj[songTime] = title
    }
  }

  return obj[Math.max(...Object.keys(obj))] ?? false
}
