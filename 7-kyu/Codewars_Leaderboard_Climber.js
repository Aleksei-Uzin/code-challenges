/**
 * Codewars Leaderboard Climber
 * https://www.codewars.com/kata/57d28215264276ea010002cf/train/javascript
 *
 */

const leaderB = (user, user_score, your_score) => {
  const score = user_score - your_score

  if (score === 0) return 'Only need one!'
  if (score < 0) return 'Winning!'

  const beta = ~~(score / 3)
  const kyu8 = score - beta * 3
  const dammit = beta + kyu8 > 1000 ? ' Dammit!' : ''

  return `To beat ${user}'s score, I must complete ${beta} Beta kata and ${kyu8} 8kyu kata.${dammit}`
}
