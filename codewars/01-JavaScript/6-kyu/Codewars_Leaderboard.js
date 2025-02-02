/**
 * Codewars Leaderboard
 * https://www.codewars.com/kata/5a57d101cadebf03d40000b9/train/javascript
 *
 */

const getLeaderboardHonor = async () => {
  const response = await fetch('https://www.codewars.com/users/leaderboard')
  const data = await response.text()
  const honorArr = data
    .match(/"honor">\d+,\d+/g)
    .map(honor => honor.replace(/\D+(\d+),(\d+)/g, '$1$2'))
    .map(Number)

  return honorArr
}
