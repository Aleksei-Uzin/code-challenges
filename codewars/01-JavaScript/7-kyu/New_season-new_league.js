/**
 * New season, new league
 * https://www.codewars.com/kata/58de08d376f875dbb40000f1/train/javascript
 *
 */

const premierLeagueStandings = teamStandings => {
  const sorted = Object.values(teamStandings).sort((a, b) => {
    if (a === teamStandings[1]) return -1
    else if (b === teamStandings[1]) return 1
    else return a.localeCompare(b)
  })
  const newLeague = sorted.reduce(
    (acc, team, i) => ((acc[i + 1] = team), acc),
    {}
  )

  return newLeague
}
